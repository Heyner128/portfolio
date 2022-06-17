const express = require('express');
var path = require('path');
   
const app = express();
const PORT = 3000;

app.set('view engine','ejs');
app.use(express.static("../views"));

app.get('/', function (req, res) {
  try {
    res.render('home')
  } catch (e) {
    res.send('page render error')
  }

})

app.listen(PORT,()=> {});



