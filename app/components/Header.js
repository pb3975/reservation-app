import React from 'react'
import Nav from './Nav'


class Header extends React.Component {
  

  render() {
  return(
    <div className='header'>
      <h1>JQueue</h1>
      <Nav />
    </div>
  )
}

}

module.exports = Header;