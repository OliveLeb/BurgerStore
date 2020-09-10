import React, { useState, useEffect } from 'react';
import './Admin.modules.css';
import { NavLink } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataService from '../../services/Services';
import Englobant from '../../HOC/Englobant';
//import DeleteArticle from '../../actions/actionsArticles';

const Admin = ({ state, dispatch }) => {
  const { articles, isLoading, hasError, isDeleted } = state;

  const deleteArticle = (id) => {
    DataService.remove(id)
      .then((res) => {
        const remainingResult = articles.filter((result) => result.id !== id);
        dispatch({
          type: 'DELETE_ARTICLE_SUCCESS',
          payload: remainingResult,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (isDeleted) {
      const notify = () => {
        toast.success('Article supprimé avec succès !');
      };
      notify();
    }
  }, [isDeleted]);

  return (
    <div className='row admin'>
      <h1 className='mb-5'>
        <strong>Liste des produits </strong>

        <NavLink to='/admin/ajouter' className='btn btn-success'>
          <GoPlus /> Ajouter
        </NavLink>
      </h1>

      <ToastContainer />
      {hasError && <span>OOPSI, une erreur est survenue !</span>}
      {isLoading ? (
        <div className='spinner-border text-center' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <div className='table-responsive'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix (€)</th>
                <th>Catégorie</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td style={{ width: '300px' }}>
                    <NavLink
                      to={`/admin/view/${item.id}`}
                      className='btn btn-outline-dark btn-sm'
                    >
                      <FaEye /> Voir
                    </NavLink>

                    <NavLink
                      to={`/admin/modifier/${item.id}`}
                      className='btn btn-primary btn-sm mr-1 ml-1'
                    >
                      <FaPencilAlt /> Modifier
                    </NavLink>

                    <button
                      onClick={() => deleteArticle(item.id)}
                      className='btn btn-danger btn-sm'
                    >
                      <ImCross /> Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Englobant(Admin);
