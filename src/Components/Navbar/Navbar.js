import { signOut } from 'firebase/auth';
import'./Navbar.css'
import React from 'react';
import logo from'../../images/logo.jpeg'
import { Button} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSingOut=()=>{
        signOut(auth)
    }

   
    return (
        <div className='nav-bar'>
            <nav class="navbar navbar-expand-lg shadow-lg navbar-text navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src={logo} alt="" width="250" height="50" class="d-inline-block align-text-top ps-5"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end pe-5 " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <NavLink className={({isActive})=>isActive?"active-link ": "link"} to='/'>Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({isActive})=>isActive?"active-link ": "link"}   to='/inventories'>Inventories</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/blog'>Blogs</NavLink>
            </li>
            {
              user?<Button className='link btn-light' onClick={handleSingOut}><h6>Log Out</h6></Button>
              :<li class="nav-item">
              <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/login'>Log In</NavLink>
              </li>
            }
            <li class="nav-item">
            <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;