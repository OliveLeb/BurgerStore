import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateArticle from '../../actions/actionsArticles';
import UploadFiles from '../../actions/UploadFiles';
import Englobant from '../../HOC/Englobant';

const AjouterArticle = ({ categories, dispatch, state }) => {
  const inputImage = useRef(null);
  const { articleCreated, selectedFiles, isUploaded } = state;
  const { name, description, price, category } = articleCreated;

  useEffect(() => {
    dispatch({
      type: 'CREATE_INIT',
    });
  }, []);

  CreateArticle();
  UploadFiles();

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SUBMIT_SUCCESS',
    });
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
  const upload = () => {
    dispatch({
      type: 'UPLOAD_SUCCESS',
      selectedFiles: inputImage.current.files[0],
    });
  };

  const cancel = () => {
    dispatch({
      type: 'SUBMIT_CANCELLED',
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
              onChange={updateImageInput}
              ref={inputImage}
            />

            <button type='button' className='btn btn-primary' onClick={upload}>
              Upload
            </button>
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Ajouter
        </button>
        <Link to='/admin' className='btn btn-danger ml-2' onClick={cancel}>
          Annuler
        </Link>
      </form>
    </div>
  );
};

export default Englobant(AjouterArticle);
