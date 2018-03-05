var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');





ReactDOM.render(
    <App />,
    document.getElementById('app')
);
// new code 
React.createElement(
    "div",
    { className: "making-reservation" },
    React.createElement(
      "h3",
      null,
      "Making a Reservation",
      props.name
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "First Name"
      ),
      React.createElement(
        "li",
        null,
        "Last Name"
      ),
      React.createElement(
        "li",
        null,
        "Phone Number"
      )
    )
  );
//end of new code
