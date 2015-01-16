# Notes on JS Configuration  

  * npm =>
      * git init  
      * add node_modules to .gitignore  
      * npm init -- test command "`npm bin`/jasmine(or your tests package)" 
      * npm install (your modules)
      * ?  

---        

  * jasmine  
      * npm install -- jasmine  =>  add jasmine to node_modules
      * jasmine init  
      * describe code snippet for vim ***  
      * in the testing suite the var = require statement only imports vars||functions that are declared in the required file with module.export  to test anything else it must be added into the test  smallprojects/callback-io/spec/callbackio_spec.js line 6 block  
      * to run the test 'npm test' in project dir  

---        

  * git add .gitignore after push and remove directory (node_modules)  
      * git rm -r --cached some-directory  
      * git commit -m 'Remove the now ignored directory "some-directory"'  
      * git push origin master  

  * 

