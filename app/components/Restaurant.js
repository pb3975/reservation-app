import React from 'react'

class Restaurant extends React.Component {
  render(){
    return(
      <div className='restaurant-info-container'>
        <div className='title-image'>Restaurant Name</div>

        <div>
          <h3>Address</h3>
          <h3><a href='https://www.google.com'>Website</a></h3>
          <div>
            <h3><a href='google.com'>Link to map</a></h3>
            <h3><a href='google.com'>Directions</a></h3>
          </div>
          <div><p><b>Description: </b>Description of stuff</p></div>
      </div>
      </div>
    )
  }
}

module.exports = Restaurant