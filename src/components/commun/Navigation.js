import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

const Navigation = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className='container site'>
        <NavLink to='/'>
          <h1 className='text-logo'>
            <GiKnifeFork />
            Burger Store
            <GiKnifeFork />
          </h1>
        </NavLink>
      </div>

      <nav
        className='nav'
        style={{ marginBottom: '30px', justifyContent: 'center' }}
      >
        <NavLink to='/menus' className='nav-link'>
          Menus
        </NavLink>
        <NavLink to='/burgers' className='nav-link'>
          Burgers
        </NavLink>
        <NavLink to='/boissons' className='nav-link'>
          Boissons
        </NavLink>
        <NavLink to='/snacks' className='nav-link'>
          Snacks
        </NavLink>
        <NavLink to='/salades' className='nav-link'>
          Salades
        </NavLink>
        <NavLink to='/desserts' className='nav-link'>
          Desserts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
