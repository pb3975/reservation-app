import React from 'React'
var Link = require('react-router-dom').Link;

class Home extends React.Component{
  render() {
    return (
      <div className = 'home-container'>
        <h1> Reservation app!</h1>

        <Link className='button' to='/battle'>
          Link to Something
        </Link>
      </div>
    )
  }
}

module.exports = Home;