import React from 'react';
import './Admin.modules.css';
import { NavLink } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Actions from '../../actions/actionsArticles';

const Admin = () => {
  const [articles] = Actions();

  return (
    <div className='row'>
      <div className='admin'>
        <h1>
          <strong>Liste des produits </strong>

          <NavLink to='/admin/ajouter' className='btn btn-success'>
            <GoPlus /> Ajouter
          </NavLink>
        </h1>
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
                    <NavLink to='*' className='btn btn-outline-dark btn-sm'>
                      <FaEye /> Voir
                    </NavLink>

                    <NavLink
                      to='*'
                      className='btn btn-primary btn-sm mr-1 ml-1'
                    >
                      <FaPencilAlt /> Modifier
                    </NavLink>

                    <NavLink to='*' className='btn btn-danger btn-sm'>
                      <ImCross /> Supprimer
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
