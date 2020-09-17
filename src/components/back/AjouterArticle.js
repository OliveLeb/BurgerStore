import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateArticle from '../../actions/CreateArticle';
import UploadFiles from '../../actions/UploadFiles';
import Englobant from '../../HOC/Englobant';
import {
  cancel,
  upload,
  updateField,
  updateImageInput,
} from '../../actions/actions';
import { ToastContainer } from 'react-toastify';

const AjouterArticle = ({ categories, dispatch, state }) => {
  const inputImage = useRef(null);

  const { isUploaded, articleById } = state;
  const { name, description, price, category, image } = articleById;

  useEffect(() => {
    dispatch({
      type: 'CREATE_INIT',
    });
  }, []);

  CreateArticle(state, dispatch);
  UploadFiles();

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SUBMIT_SUCCESS',
    });
  };

  const canBeSubmitted = () => {
    return (
      name.length < 0 &&
      description.length < 0 &&
      price.length < 0 &&
      //!isUploaded &&
      category == 0
    );
  };
  const isEnabled = canBeSubmitted;

  return (
    <div className='row admin'>
      <h1>Ajouter un article</h1>
      <ToastContainer />
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
            onChange={updateField(dispatch)}
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
            onChange={updateField(dispatch)}
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
            value={price || 0}
            onChange={updateField(dispatch)}
          />
        </div>

        <div className='form-group'>
          <label>Catégorie :</label>
          <select
            className='form-control'
            name='category'
            onChange={updateField(dispatch)}
            value={category || ''}
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
          <div className='d-flex justify-content-start'>
            <input
              type='file'
              className='form-control-file'
              id='image'
              name='image'
              onChange={updateImageInput(dispatch, inputImage)}
              ref={inputImage}
            />

            <button
              type='button'
              className='btn btn-primary'
              onClick={upload(dispatch, inputImage)}
              disabled={!image}
            >
              Upload
            </button>
          </div>
        </div>

        <button type='submit' className='btn btn-primary' disabled={isEnabled}>
          Ajouter
        </button>
        <Link
          to='/admin'
          className='btn btn-danger ml-2'
          onClick={cancel(dispatch)}
        >
          Annuler
        </Link>
      </form>
    </div>
  );
};

export default Englobant(AjouterArticle);
