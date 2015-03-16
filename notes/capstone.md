# FullPixel CapStone Project  

---  
Myles   
Mike  
Seth  
Matt  
---  

### MEAN stack  

* create an instance of app => var app = express() => only one instance of express  
* express routes => static public folder in server.js (app entry point)  
* express routes in app/controllers  => can create multiple instances of Router  
* express db.js in app/models => connects to MongoDB instance  
* express post.js in app/models => requires db.js & creates the db schema  
* express posts.js in app/controllers => requires post.js => creates a new instance of router => creates router.get & router.post => exports router  
* ng index.html => list.ctrl.js  A

---  

* using bcrypt to hash & salt users pw => use asynchronous (4x as many requests/ 3x faster per)  
* 
