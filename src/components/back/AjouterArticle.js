import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ActionCategories from '../../actions/actionsCategorie';
import DataService from '../../services/Services';

const AjouterArticle = () => {
  const history = useHistory();
  const [categories] = ActionCategories();
  const initialValues = {
    name: '',
    description: '',
    price: '',
    image: '',
    category: 0,
  };
  const [addedArticle, setAddedArticle] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log(addedArticle);

    const data = {
      name: addedArticle.name,
      description: addedArticle.description,
      price: addedArticle.price,
      image: addedArticle.image,
      category: addedArticle.category,
    };
    console.log(data);

    DataService.create(data)
      .then((res) => {
        setAddedArticle({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
          image: res.data.image,
          category: res.data.category,
        });
        setIsSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        setIsSubmitted(false);
        console.log(e);
      });
    history.push('/admin');
  };

  const updateField = (e) => {
    setAddedArticle({
      ...addedArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='row'>
      <div className='admin' style={{ width: '100%' }}>
        <h1>Ajouter un article</h1>
        {/*isSubmitted && (
          <div
            className='toast'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className='toast-header'>
              <strong className='mr-auto'>Burger Store</strong>
              <button
                type='button'
                className='ml-2 mb-1 close'
                data-dismiss='toast'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='toast-body'>Article créé avec succès !</div>
          </div>
        )*/}

        <form className='form' onSubmit={submit}>
          <div className='form-group'>
            <label>Nom :</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder='Nom'
              value={addedArticle.name}
              onChange={updateField}
            />
          </div>

          <div className='form-group'>
            <label>Description :</label>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              placeholder='Description'
              value={addedArticle.description}
              onChange={updateField}
            />
          </div>

          <div className='form-group'>
            <label>Prix (€) :</label>
            <input
              type='number'
              step='0.01'
              min='0'
              className='form-control'
              id='price'
              name='price'
              placeholder='Prix'
              value={addedArticle.price}
              onChange={updateField}
            />
          </div>

          <div className='form-group'>
            <label>Catégorie :</label>
            <select
              className='form-control'
              name='category'
              onChange={updateField}
              value={addedArticle.category}
            >
              <option value='0'>Choisir...</option>
              {categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label>Image :</label>
            {/*
            <input
              type='file'
              className='form-control-file'
              id='image'
              name='image'
              value={addedArticle.image}
              onChange={updateField}
            />*/}
            <input
              type='text'
              className='form-control'
              id='image'
              name='image'
              value={addedArticle.image}
              onChange={updateField}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Ajouter
          </button>
          <Link to='/admin' className='btn btn-danger ml-2'>
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AjouterArticle;
