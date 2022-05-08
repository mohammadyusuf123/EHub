import React from 'react';
import logo from'../../images/logo.jpeg'
import'./Footer.css'

const Footer = () => {
    return (
        <div className='d-flex justify-content-sm-center w-100 pt-5  bg-info text-white'>
            <div className='list'>
                <div>
                    <img src={logo} width="250" height="50" alt="" />
                </div>
            <>
            <ul>
              <li>About Us</li>
              <li>Success</li>
              <li>privacy Policy</li>
              <li>Terms&Condition</li>
                <li>Help</li>
            </ul> 
          </>
          <div>
            <h6 class="mt-3 ms-3">Electronics Hub</h6>
          <h6 class="ms-3">@ Copyright 2022</h6>
          </div>
            </div>
        </div>
    )
};

export default Footer;