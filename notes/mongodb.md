# MongoDB  

---  

  * noSQL  =>  maps better to JS JSON object  
    * key value pair paradim  
    * no scheme needed  
    *  
  * Mongoose ODM 

---  

  * create server.js file in node directory  
  * using mongoose create post model in dir model file post.js  
  * module export both  
  * /model/post.js is the Post endpoint 
  * in server.js require post module when the request comes in build a new instance of the post model with 'new Post()' 
  * then save that post model and return model w 201 status code  
  * errors are handled with the if (err) where the callback returns the data  
  * in Express the next(err) returns the error with a 500 status code  
  * 
