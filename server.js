require('dotenv').config();
const express = require('express');
app = express();

app.use(express.static('./'));
app.set('views', __dirname + '/html')
app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log('Example!!');
});

app.get('/', function (req, res) {
  res.render('index', {server: process.env.TWICASS_SERVER});
});
