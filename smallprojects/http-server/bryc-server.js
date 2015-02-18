// bryce's server 

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var people = [];

var server = http.createServer(function(req, res) {
  console.log(req.method + ': ' + req.url);
  var pathArray = req.url.split('/');
  var path = req.url;
  var GET = req.method === "GET";
  var POST = req.method === "POST";
  var PUT = req.method === "PUT";
  var DELETE = req.method === "DELETE";
  
  if (pathArray.slice(1,3).join('/') === 'api/people')  {
    var remainingPath = pathArray.slice(3);
    apiHandler(req, res, remainingPath);
  } else if (path === '/' && GET){
    res.writeHead(302, {'Content-Type': 'text/html', 'Location': '/home'});
    console.log('Redirect: ' + '/home');
    res.end();
  } else if (path === '/home' && GET) {
    fs.readFile('./public/index.html', function(err, data){
      if (err) { notFound(res) }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data); 
    });
  } else if (path === '/css/application.css' && GET) {
    fs.readFile('./public/css/application.css', function(err, data){
      if (err) { notFound(res) }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
  } else if (path === '/js/application.js' && GET) {
    fs.readFile('./public/js/application.js', function(err, data){
      if (err) { notFound(res) }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(data);
    });
  } else {
    notFound(res);
  }
});

server.listen(3000);
console.log("listening on port 3000");

function notFound(res) {
  console.log('404 - not found');
  res.writeHead(404, {'Location': '/404.html' });
  res.end('404 - not found');
}

function apiHandler(req, res, pathArray){ 
  var GET = req.method === "GET";
  var POST = req.method === "POST";
  var PUT = req.method === "PUT";
  var DELETE = req.method === "DELETE";
  
  if (pathArray.length === 1 && pathArray[0] === '') pathArray.pop();

  if (GET && pathArray.length === 0) {
    fs.readFile('./public/api.html', function(err, data){
      if (err) { notFound(res); }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (POST && pathArray.length === 0) {
    req.on('data', function(body){
      var form = querystring.parse(body.toString());
      var person = new Person(form.first_name, form.last_name, form.address);
      people.push(person);
    }).on('end', function(){
      res.writeHead(302, {'Location': '/api/people'});
      res.end();
    });
  } else if (GET && pathArray.length === 1 && pathArray[0] !== 'list'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(people[pathArray[0]]));
  } else if (DELETE && pathArray.length === 1 && pathArray[0] !== 'list'){
    people.splice(pathArray[0] - 1, 1);
    res.writeHead(302, {'Location': '/api/people'});
    res.end();
  } else if (GET && pathArray[0] === 'list') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(people));
  }
}

function Person(first, last, address){
  this.first_name = first;
  this.last_name = last;
  this.address = address;

  return this;
}
