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
      * main file module.export.*** = ***  text file var app = ('../mainfile');  
      * expect function replaces expect(app.function()) with expect(result of function())  ** console.log doesn't return anything!!!  


---        

  * git add .gitignore after push and remove directory (node_modules)  
      * git rm -r --cached some-directory  
      * git commit -m 'Remove the now ignored directory "some-directory"'  
      * git push origin master  

  * 
### Steps with new projects with jasmine testing  

  1. mkdir 'newDirectory'   
  2. cd to newDirectory    
  3. echo "node_modules" >> .gitignore    
  4. npm init (prompts for project meta creates package.json)  
  5. jasmine init  (creates spec directory)  
  6. cd to spec and add new_spec.js file for your test suite    
  7. npm install --save jasmine (adds jasmine as a dependency in your packacge.json)  
  8. write tests in new_spec.js => require index.js => module.export to your new_spec.js file    
  9. to run tests in newDirectory 'npm test'  

### git notes  
  * in a repo where you are a contributor github only rewards master branch commits.  
  * ?  

