import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

const Navigation = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <NavLink to='/'>
        <h1 className='text-logo'>
          <span>
            {' '}
            <GiKnifeFork />
          </span>
          Burger Store
          <span>
            <GiKnifeFork />
          </span>
        </h1>
      </NavLink>

      <nav className='nav nav-pills'>
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
