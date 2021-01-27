import React from 'react'
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Navbar = () => {

    const logout = () => {
        axiosWithAuth()
          .post('/logout')
          .then(res=>{
            localStorage.removeItem('token');
            window.location.href = '/login';
          })
          .catch(err=>{
            console.log(err);
          })
      };

    return (
            <div>
                <Link to='/'>
                    <h1>Friends</h1>
                </Link>
                <div>
                    <Link to='/login'>Login</Link>
                    <Link onClick={logout}>Log Out</Link>
                </div>
            </div>
    )
}

export default Navbar
