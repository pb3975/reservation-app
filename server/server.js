var express = require('express');
require('dotenv').config()
var path = require('path');
// var router = express.Router();
var mongoose = require('mongoose');
const Reservation = require('./models/Reservations')


const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3001;

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;


//Set up default mongoose connection
const mongoDB = `mongodb://${db_user}:${db_pass}@ds111059.mlab.com:11059/${db_name}`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Creating test fixtures
// Reservation.create({
//   business_id: '5aa595a06394a8209454e429',
//   customer_id: '5aa58dd450f8913a80413ebc',
//   reservation_time: 1200
// });

var app = express();
const customersRoute = require('./routes/api/customers');
const businessesRoute = require('./routes/api/businesses');
const reservationsRoute = require('./routes/api/reservations');


//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
 });
app.use('/api/customers/', customersRoute);
app.use('/api/businesses/', businessesRoute);
app.use('/api/reservations/', reservationsRoute);











// React router use
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up');
});














// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
