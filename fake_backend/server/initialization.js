// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes.js');
const app = express();


app.set('port', (process.env.PORT || 4000));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use('/api', routes);

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});
