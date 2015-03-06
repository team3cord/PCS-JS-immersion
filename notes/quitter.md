# Quitter notes  

---  

Write modern web apps w MEAN stack => Jeff Dickey  

---

  * the order in which you declare component doesn't matter however you do need to access the nodule object you create with angular.module('appname', [])  
  * angular.module() is a method that can be used as either a getter || setter  
  * if you  call angular.module('nameofmod') it will return that modules getter  
  * if you call angular.module('nameofmod', [dependencies]) it is a setter => the setter can be called only once and must be called before any getters  

---  


## Structure  

## Dependencies  

## Node API  
  
  * create endpoint in server.js for / (res.sendFile())
  * create endpoint in post controller for addPost() with $http service => $scope.addPost  * $http.get should not be inside addPost() function
  * mongoose allows you to keep chining the query with various methods (| orderBy: '-date')  
  * MOST EXPRESS apps have a single entry point to start and instance of the server => important to keep it as lightweight as possible  
    * global middleware  
    * global configuration  
    * tell server to listen  
    * logger setup  
    * error handling  
    * mounting controllers  
  * gulp-uglify  
    * 'Unknown provider' is an error that the dependency injector couldn't find a dependency => angular is incompatable w/ JS minifiers  
    * .service('PostsSvc', function($http)) needs to be changed to .service('PostsSve', [$http, function($http){}]) => this is the correct way to declare dependecies & minify JS  
    * gulp-ng-annotate allows you to write consise code but minify as well  


---  

### refactor  

  * break out the api/posts endpoint => controllers/api/posts => require the post model => use express router obj  
  * attach it to the server.js => app.use(require ('./controllers/api/posts'))  
  * break out the sendFile endpoint => controllers/static => use express router obj  
  * attach it to the server.js => app.use(require ('./controllers/static'))  
  * important to remember to module.exports = router  

---   

## Angular static assets & services  

  * add static asset in controllers/static => use express router obj => add static js file in html w/ reg src=app.js  
  * break out the $http service into a PostsSvc then dependency inject $http  => define a func on the service called fetch that returns the $http promise for loading posts => dependency inject PostsSvc into the controller  
  * the PostsSvc create function needs to have the post passed to it and returned with the url  
  * 

## Automation (Gulp.js)  

  * Gulp is stream based => config in JS & more compact  => increased speed  
  * load files with gulp.src into a stream them | them through various plugins => output them w/ gulp.dest  
  *  

## Authentication  

## Routing & Client Authentication  

## Websockets (push notifications)  

## Testing (end to end)  

## Testing (server)  

## Testing (angular)  

## Deployment  


