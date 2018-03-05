import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Nav (){
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName='active' to='/about'>
          New Reservation
        </NavLink>
      </li>

       <li>
        <NavLink activeClassName='active' to='/find'>
          Find a Restaurant
        </NavLink>
      </li>

    </ul>
  )
}

module.exports = Nav;