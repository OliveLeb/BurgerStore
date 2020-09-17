import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';

const Navigation = () => {
  return (
    <div className='title' style={{ textAlign: 'center' }}>
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

      <nav className='nav navbar navbar-expand-lg nav-pills'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <AiOutlineMenu style={{ color: 'white' }} />
        </button>
        <div
          className='collapse navbar-collapse justify-content-center'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
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
            <NavLink to='/admin' className='nav-link'>
              Admin
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
