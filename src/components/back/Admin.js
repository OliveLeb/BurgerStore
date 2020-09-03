import React from 'react';
import './Admin.modules.css';
import { NavLink } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Admin = () => {
  return (
    <div className='container admin'>
      <div className='row'>
        <h1>
          <strong>Liste des produits </strong>
        </h1>

        <NavLink to='*' className='btn btn-success btn-lg'>
          <GoPlus /> Ajouter
        </NavLink>

        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Catégorie</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>Description 1</td>
              <td>Prix 1</td>
              <td>Catégorie 1</td>
              <td style={{ width: '300px' }}>
                <NavLink to='*' className='btn btn-outline-dark'>
                  <FaEye /> Voir
                </NavLink>

                <NavLink to='*' className='btn btn-primary'>
                  <FaPencilAlt /> Modifier
                </NavLink>

                <NavLink to='*' className='btn btn-danger'>
                  <ImCross /> Supprimer
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
