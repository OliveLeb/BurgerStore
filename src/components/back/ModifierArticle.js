import React, { useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import DataService from '../../services/Services';
import Article from '../commun/Article';
import UploadFiles from '../../actions/UploadFiles';
import Englobant from '../../HOC/Englobant';
import {
  upload,
  cancel,
  updateField,
  updateImageInput,
} from '../../actions/actions';
import { ToastContainer, toast } from 'react-toastify';

const ModifierArticle = ({ state, dispatch, categories }) => {
  const { articleById, articles } = state;
  const { name, description, price, image, categoryId } = articleById;
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
      category: categoryId,
    };
    const id = slug;
    DataService.update(id, data)
      .then((res) => {
        console.log(res);
        toast.success('Article modifié avec succès !');
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: 'HAS_ERROR',
        });
        toast.error("Erreur lors de la modification de l'article...");
      });

    history.push('/admin');
  };

  UploadFiles();

  return (
    <div className='row admin'>
      <div className='col-sm-6'>
        <h1>Modifier un article</h1>
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
              value={price || ''}
              onChange={updateField(dispatch)}
            />
          </div>
          <div className='form-group'>
            <label>Catégorie :</label>
            <select
              className='form-control'
              name='categoryId'
              onChange={updateField(dispatch)}
              value={categoryId}
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
            <select
              className='form-control mb-2'
              onChange={updateField(dispatch)}
              name='image'
              value={image}
            >
              {articles.map((item) => (
                <option key={item.id} value={item.image}>
                  {item.image}
                </option>
              ))}
            </select>
            <div className='d-flex justify-content-start'>
              <input
                type='file'
                className='form-control-file'
                id='image'
                name='image'
                ref={inputImage}
                onChange={updateImageInput(dispatch, inputImage)}
              />
              <button
                type='button'
                className='btn btn-primary'
                onClick={upload(dispatch, inputImage)}
                disabled={inputImage}
              >
                Upload
              </button>
            </div>
            (Ne pas upload l'image si elle ne change pas et n'est pas déjà
            upload.)
          </div>

          <div className='row mt-5 justify-content-center'>
            <button type='submit' className='btn btn-primary'>
              Modifier
            </button>
            <Link to='/admin' className='btn btn-danger ml-2' onClick={cancel}>
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
