import React, { useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import DataService from '../../services/Services';
import Article from '../commun/Article';
import Englobant from '../../HOC/Englobant';

const ModifierArticle = ({ state, dispatch, categories }) => {
  const { articleById } = state;
  const { name, description, price, image, category } = articleById;
  const inputImage = useRef();
  const { slug } = useParams();
  const history = useHistory();
  const isBtnBuy = false;

  const submit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      description: description,
      price: price,
      image: image,
      category: category,
    };
    const id = slug;
    DataService.update(id, data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push('/admin');
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
      <div className='col-sm-6'>
        <h1>Modifier un article</h1>

        <form className='form' onSubmit={submit}>
          <div className='form-group'>
            <label>Nom :</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder='Nom'
              value={name || ''}
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
              value={description || ''}
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
              value={price || ''}
              onChange={updateField}
            />
          </div>
          <div className='form-group'>
            <label>Catégorie :</label>
            <select
              className='form-control'
              name='category'
              onChange={updateField}
              value={category || ''}
            >
              {categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label>Image :</label>
            <div className='d-flex justify-content-start'>
              <input
                type='file'
                className='form-control-file'
                id='image'
                name='image'
                ref={inputImage}
                onChange={updateImageInput}
              />
              <button className='btn btn-primary'>Upload</button>
            </div>
          </div>
          (Pas besoin de reupload l'image si elle ne change pas.)
          <div className='row mt-5 justify-content-center'>
            <button type='submit' className='btn btn-primary'>
              Modifier
            </button>
            <Link to='/admin' className='btn btn-danger ml-2'>
              Annuler
            </Link>
          </div>
        </form>
      </div>

      <div className='col-sm-6'>
        <Article
          name={name}
          description={description}
          price={price}
          image={image}
          btnBuy={isBtnBuy}
        />
      </div>
    </div>
  );
};

export default Englobant(ModifierArticle);
