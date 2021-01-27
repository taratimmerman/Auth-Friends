import React from 'react'
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Navbar = () => {

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className='nav'>
      <Link className='link' to='/'>
        <h1>Auth-Friends</h1>
      </Link>
      <div className='navMenu'>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' onClick={logout}>Log Out</Link>
      </div>
    </div>
  )
}

export default Navbar
