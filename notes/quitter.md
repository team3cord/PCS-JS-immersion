# Quitter notes  

---  

Write modern web apps w MEAN stack => Jeff Dickey  

---  

## Structure  

## Dependencies  

## Node API  
  
  * create endpoint in server.js for / (res.sendFile())  
  * create endpoint in post controller for addPost() with $http service => $scope.addPost  * $http.get should not be inside addPost() function  
  * mongoose allows you to keep chining the query with various methods (| orderBy: '-date')  

---  

### refactor  

  * break out the api/posts endpoint => controllers/api/posts => require the post model => use express router obj  
  * attach it to the server.js => app.use(require ('./controllers/api/posts'))  
  * break out the sendFile endpoint => controllers/static => use express router obj  
  * attach it to the server.js => app.use(require ('./controllers/static'))  
  * important to remember to module.exports = router  

---   

## Automation (Gulp.js)  

## Authentication  

## Routing & Client Authentication  

## Websockets (push notifications)  

## Testing (end to end)  

## Testing (server)  

## Testing (angular)  

## Deployment  


