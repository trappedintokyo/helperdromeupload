const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


var path = require('path');
var routes = require("./routes"); // sesion request handlers
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

var mongodb = require('mongodb');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/submissions");
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/submit', (req, res) => {
  res.sendFile(__dirname + '/submit.html');
});
app.get('/demo-1', (req, res) => {
  res.sendFile(__dirname + '/demo-1.html');
});
app.get('/demo-2', (req, res) => {
  res.sendFile(__dirname + '/demo-2.html');
});
app.get('/demo-3', (req, res) => {
  res.sendFile(__dirname + '/demo-3.html');
});
app.get('/thankyou', (req, res) => {
  res.sendFile(__dirname + '/thankyou.html');
});
app.get('/about',(req,res) =>{
  res.sendFile(__dirname + '/about.html');

});
app.get('/posts',(req,res) =>{
  res.sendFile(__dirname + '/posts.html');

});
app.get('/news', (req, res) => {
  res.sendFile(__dirname + '/news.html');
  
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
 
});

app.get('/rules', (req, res) => {
  res.sendFile(__dirname + '/rules.html');
 
});

app.get('/faq', (req, res) => {
  res.sendFile(__dirname + '/faq.html');
 
});
// io.on('connection', (socket) => {
//   console.log('a user connected');
  
// });

// app.use(routes);

server.listen(3001, () => {
  console.log('listening on *:3000');
});