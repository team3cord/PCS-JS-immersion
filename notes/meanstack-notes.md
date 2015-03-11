# MEAN stack  

---  

  * [MongoDB](http://www.mongodb.org/)  
  * [Express.js](http://expressjs.com/)  
  * [Angular.js](https://angularjs.org/)  
  * [Node.js](http://nodejs.org/)  

---  

### MongoDB  
  
  * NoSQL Document DB  
  * Dynamic Scheme => no need to create the db scheme before building the application  Collections do not enforce document structure.  
  * Binary JSON => data stored as JSON  that adds dates & binary blobs as data types.  
  * Collections => documents live inside collections, there is no need to predefine a collection -- simply start inserting into it and it will have data.  
  * Full index support  
  * Map/Reduce & Aggregation  
  * Scale & Availability  

### Express.js  
  
  * framework for node.js
  * http server  
  * routes  
  * middleware  

### Angular.js  

  * client-side MVC framework  
  * separation of concerns  
  * declarative UI bindings  
  * embeddable => don't need to use angular on the whole app unless you want to 
  * testable => injectable dependence which allow testing   
  * two way data binding  
  * dependency injection  
  * declaritve instead of imperative  


### Node.js  

  * JavaScript on the server  
  * Google's V8 engine  
  * Non-blocking asyncronous model  (single thread)  
  * npm package manager   

---  

## End Points   
  * create the server side API with 2 endpoints   
  * GET endpoint  => return JSON array of all the data   
  * POST endpoint = espects a JSON doc containing data (username, body)   

## Seeds & Generators  

  * [mean.js](http://meanjs.org/)  
  * [mean io](http://mean.io)  
  * [grunt](http://gruntjs.com)
  * [gulp](http://gulpjs.com/)  

### ToDo  

  * create a angular.js / express.js app with gulp || grunt  to work on through the angular week.
  * only use TDD from here out   
  * attempt a webkit native app for ubuntu and OSX  
  * 

---   

 * which type of apps work best with a nosql db???  
 * express middleware helps parse respones and api handling & sits on top of node.js  
 * websockets ??  
 * npm server side package manager && bower is the client side package manger && grunt || gulp for task running/build tools  
 *  

---  

### What is the best dir structure  

app --
--- assets
--- --- css  
--- --- img  
--- --- js  
--- config  
--- --- env => all/dev/prod/test
--- --- config.js  
--- --- express.js  
--- --- routes.js  
--- server  
--- --- controlers => articles/posts.js && index.js  
--- ---  models  => article.js  
--- views 
--- --- articles => create/edit/list/view   
--- --- includes => header/footer  
--- --- layouts  => default articles SPA??   
--- --- pages => admin/apps/home/about???  
--- --- templates => navbar?? !includes??  

--- --- 404/500/ index.jade??? 
bowerre
gitignore
README.md  
bower.json  
gruntfile/gulpfile.js  
package.json  
server.js  

---   



