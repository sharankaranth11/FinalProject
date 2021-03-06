import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faCartShopping,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import UserOptions from './UserOptions';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <nav
      className='navbar navbar-expand-lg  navbar-light '
      style={{ backgroundColor: '	transperent' }}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Cake&Bakes
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/products'
              >
                Cakes
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/contact'>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active' to='/about'>
                About
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {/* <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-primary text-white'
                type='submit'
              >
                Search
              </button>
            </form> */}
            <li className='nav-item'>
              <Link className='nav-link active' to='/cart'>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className='fa-reagular fa-2x'
                />
              </Link>
            </li>
            <li className='nav-item'>
              {isAuthenticated ? (
                <Link
                  className='nav-link active '
                  style={{ position: 'relative', top: '100px' }}
                >
                  <UserOptions user={user} />
                </Link>
              ) : (
                <Link className='nav-link active' to='/login'>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className='fa-reagular fa-2x'
                  />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
