import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateArticle } from '../../actions/actionsArticles';

const AjouterArticle = ({ categories, dispatch, articleCreated }) => {
  const inputImage = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const data = {
    name: articleCreated.name,
    description: articleCreated.description,
    price: articleCreated.price,
    image: articleCreated.image,
    category: articleCreated.category,
  };

  CreateArticle(data, isSubmitted, setIsSubmitted);

  const submit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const updateField = (e) => {
    dispatch({
      type: 'NEW_ARTICLE',
      [e.target.name]: e.target.value,
    });
  };

  const updateImageInput = (e) => {
    const imageName = inputImage.current.files[0].name;
    dispatch({
      type: 'NEW_ARTICLE',
      image: imageName,
    });
  };

  return (
    <div className='row admin'>
      <h1>Ajouter un article</h1>

      <form className='form' onSubmit={submit}>
        <div className='form-group'>
          <label>Nom :</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='Nom'
            value={articleCreated.name}
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
            value={articleCreated.description}
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
            value={articleCreated.price}
            onChange={updateField}
          />
        </div>

        <div className='form-group'>
          <label>Catégorie :</label>
          <select
            className='form-control'
            name='category'
            onChange={updateField}
            value={articleCreated.category}
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

          <input
            type='file'
            className='form-control-file'
            id='image'
            name='image'
            onChange={updateImageInput}
            ref={inputImage}
          />

          <button type='button' className='btn btn-primary'>
            Upload
          </button>
        </div>

        <button type='submit' className='btn btn-primary'>
          Ajouter
        </button>
        <Link to='/admin' className='btn btn-danger ml-2'>
          Annuler
        </Link>
      </form>
    </div>
  );
};

export default AjouterArticle;
