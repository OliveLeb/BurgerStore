import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import DataService from '../../services/Services';
import Article from '../commun/Article';
import Englobant from '../../HOC/Englobant';

const ModifierArticle = ({ state, categories }) => {
  const { articles } = state;
  const { slug } = useParams();
  const history = useHistory();
  const isBtnBuy = false;

  const item = articles.find((item) => item.id === slug);

  const [articleById, setArticleById] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    category: item.categoryId,
  });

  const submit = (e) => {
    e.preventDefault();

    const data = {
      name: articleById.name,
      description: articleById.description,
      price: articleById.price,
      image: articleById.image,
      category: articleById.category,
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
    setArticleById({
      ...articleById,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='row admin'>
      <div className='col-sm-6'>
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
              value={articleById.name}
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
              value={articleById.description}
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
              value={articleById.price}
              onChange={updateField}
            />
          </div>

          <div className='form-group'>
            <label>Catégorie :</label>
            <select
              className='form-control'
              name='category'
              onChange={updateField}
              value={articleById.category}
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

            {/*<input
              type='file'
              className='form-control-file'
              id='image'
              name='image'
              value={articleById.image}
              onChange={updateField}
            />*/}
            <input
              type='text'
              className='form-control'
              id='image'
              name='image'
              value={articleById.image}
              onChange={updateField}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Modifier
          </button>
          <Link to='/admin' className='btn btn-danger ml-2'>
            Annuler
          </Link>
        </form>
      </div>

      <div className='col-sm-6'>
        <Article
          name={articleById.name}
          description={articleById.description}
          price={articleById.price}
          image={articleById.image}
          btnBuy={isBtnBuy}
        />
      </div>
    </div>
  );
};

export default Englobant(ModifierArticle);
