
import React from 'React'
import { Link } from "react-router-dom";

class Home extends React.Component{
  render() {
    return (

<div className = 'make-reservation'>
        <h3> Making a Resercation</h3>
        </div>
      <div className="make-reservation" method="POST" action="/reservation">
        <h1>Making a Reservation {this.props.name}</h1>
        <ul>
          <li>First Name </li>
          <li>Last Name </li>
          <li>Phone Number </li>
        </ul>
    }
}
</div>

<div class= "number-guest">
  <label for= "number_of_customer">Number of Customers</label>
  <select class="form-control" id="number_customer" name="number_customer">
    <option value=""></option>
    <option value="2">2</option>
    <option value="4">4</option>
    <option value="6">6</option>
    <option value="8">8</option>
  </select>
  </div>


    <li>Date Options</li>
    
      <div class= "form-group">
        <label for= "timeOptions">Time Options</label>
        <select class="form-control" id="timeOptions" name="timeOptions">
          <option value=""></option>
          <option value="8am">8:00 am</option>
          <option value="9am">9:00 am</option>
          <option value="10am">10:00 am</option>
          <option value="11am">11:00 am</option>
          <option value="12pm">12:00 pm</option>
          <option value="1pm">1:00 pm</option>
          <option value="2pm">2:00 pm</option>
          <option value="3pm">3:00 pm</option>
          <option value="4pm">4:00 pm</option>
          <option value="5pm">5:00 pm</option>
        </select>
        </div>

  <button className= "submit" value="Make a Reservation">
  </button>

module.exports = Home;
  }
};