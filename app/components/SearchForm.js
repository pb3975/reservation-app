import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import TimePicker from 'rc-time-picker';


export default class ReservationForm extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      time: props.reservation ? props.reservation.time : '',
      guests: props.reservation ? (props.reservation.guests).toString() : '',
      date: props.reservation ? moment(props.reservation.date) : moment(),
      calendarFocused: false
    }
  };

  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState(() => ({ time }));
  };
  onGuestsChange = (e) => {
    const guests = e.target.value;

    if (!guests || guests.match(/^[\d]*$/)) {
      this.setState(() => ({ guests }));
    }
  };
  onDateChange = (date) => {
    if (date) {
      this.setState(() => ({ date }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit =(e) => {
    e.preventDefault();

    if (!this.state.time || !this.state.guests) {
      this.setState(() => ({ error: 'Please provide a time and number of guests' }))

    } else { 
      this.setState(() => ({ error: ''}))
      this.props.onSubmit({
        guests: this.state.guests,
        date: this.state.date.valueOf(),
        time: this.state.time
      });
    }
  };
  render() {
    return (      
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <TimePicker
            value={this.state.time}
            onChange={this.ontTimeChange}
          />
          <input
            type="text"
            placeholder="guests"
            className="text-input"
            value={this.state.guests}
            onChange={this.onguestsChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
          <div>
            <button className="button">Submit Reservation</button>
          </div>
        </form>
    )
  }
} ;