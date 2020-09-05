import React, { useState } from 'react';
import ActionCategories from '../../actions/actionsCategorie';

const AjouterArticle = () => {
  const [categories] = ActionCategories();
  const [addedArticle, setAddedArticle] = useState({
    nom: '',
    description: '',
    prix: '',
    categorie: '',
    image: '',
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(addedArticle);
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

        <form className='form' onSubmit={submit}>
          <div className='form-group'>
            <label>Nom :</label>
            <input
              type='text'
              className='form-control'
              id='nom'
              name='nom'
              placeholder='Nom'
              value={addedArticle.nom}
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
              id='prix'
              name='prix'
              placeholder='Prix'
              value={addedArticle.prix}
              onChange={updateField}
            />
          </div>

          <div className='form-group'>
            <label>Catégorie :</label>
            <select
              className='form-control'
              name='categorie'
              onChange={updateField}
              value={addedArticle.categorie}
            >
              <option defaultValue>Choisir...</option>
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
              value={addedArticle.image}
              onChange={updateField}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AjouterArticle;
