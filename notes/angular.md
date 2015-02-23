# Angular.js  notes  

* [angular.js](https://angularjs.org/)  
* [angular seed project](https://github.com/angular/angular-seed)  // dir structure  
* [angular docs tut](https://docs.angularjs.org/tutorial/)  
*  

---  

## syntax & conventions  

  * angular uses spinal-case for it's custom attributes & camelCase for the corresponding directives which implement them.  
  * ng-app custom attr [ng core module] (https://docs.angularjs.org/api/ng)  
  * ngApp directive [directive list]  (https://docs.angularjs.org/api/ng/directive)  
  * templating => {{}} & simple expressions 'yet'+ '!'  rather than a one time insert this binding will result in continuous updates whenever the result of the espression evaluation changes  
  * auto-bootstraping will only work with one application per HTML document   
  * to run multiple applications in an HTML doc you must manually buootstrap them using angular.bootstrap instead [angular.js](https://docs.angularjs.org/api/ng/function/angular.bootstrap)  
  * app bootstrap 3 steps  
    * the injector that will be used for dep injection is created  
    * the injector then creates the root scope that becomes the context for the model  
    * angular then compiles the DOM starting at the ngApp root element => processing any directives & bindings found along the way    
  * once the app is bootstrapped it waits for incoming browser events that might change the model  
  * when events are detected angular reflects them in the view by updating all the affected bindings  
  * templates  
    * in angular, the view is a projection of the model through the HTML template  => whenever the model changes angular refreshes the binding points, which updates the view  
    * ng-app='phonecatApp' is the name of the module referencing the controller located in the controllers.js  
    * ng-repeat='phone in phones' is a directive that loops through the $scope.phones array => phone is the template databinding to output the application model value  
    * 

  


---  

## resources  

  * [egghead.io](https://egghead/technologies/angularjs)  
  * [stackoverflow list](http://stackoverflow.com/questions/14333857/how-to-master-angularjs)  

---  

* map out angular / meanstack knowlege/learning  

*  



