var React = require('react');
var ReactDOM = require('react-dom');
require('./public/index.css');
var App = require('./components/App');
import axios from 'axios';


axios.get('http://localhost:3001/api/reservations')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});



ReactDOM.render(
    <App />,
    document.getElementById('app')
);