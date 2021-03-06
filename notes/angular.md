# Angular.js  notes  
  * $scope is an angular [service](https://docs.angularjs.org/guide/services)  

* [angular.js](https://angularjs.org/)  
* [angular seed project](https://github.com/angular/angular-seed)  // dir structure  
* [angular docs tut](https://docs.angularjs.org/tutorial/)  
*  

---  

* digest loop => 
* ngCloak => hides templates while angular loads => prevents template {{attr}} flash => have to add css related to it  
* Service Types  => services are by definition are singletons => injected modules of data || functionality  
  * constatnts => cannot be modified by a decorators  
  * values  => can be modified by a decorator  
  * factories => has to return something => common use case return bundled functionality => closure to encapsulate data => when injected uses obj != new obj() => most common service   
  * services => declares a new service class => new service() => coffescript is common use case   
  * providers => same as factory except it returns a $get : function() => allows for configuration of service => app.config(nameProvider)   
  * decorators => not a formal service => a way of modifying a service after the fact => only the public facing methods  

---    

##  core concepts  

  * two-way data binding => any changes to the view are immediately reflected in the model & an changes to the model are propogated to the view  
  * dependency injection => sub system incharge of creating components, resolving their dependencies & providing them to other components as requested    * passing an object to a function helps with modularity  
  * controllers => attached to the DOM 'ng-controller' incapsulates angular $scope  & method for adding or responding to behavior in the controller scope  
  * expressions => are JS like code snipets placed in bindings {{ example }}  
  * services => Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app  
  * scopes => obj that  refers to the app model. execution context for expressions  arranged in hierarchy mimicing the DOM structure of the app  scopes can watch expressions & propagate events 
    * $scope is the convention for adding properties & methods to the controller & tying it to the view  
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
  *  the controller syntax myController.controller('MyController', ['$scope','MyThing', function($scope, MyThing){$scope.MyThing = 'ThingMy'}]); is so that when the js file is minified it does not break the angular dependency injection => angular uses the $scope(services) keyword and minification changes all variables to the smallest possible string  
  * the controller syntax relies on order in the array  it reasigns the function vars based on the order of the elements of the array b4 the function  
  * after submiting a form you must $scope.formName = null to clear the input form  
  * 
---   

  1. binding => the connection in your html of attributes that connect to your angular controllers/models/ect.  
  2. services => angular singletons that can be passed around to controllers ensuring that you are dealing with the same object each time => they can have various controllers & directives affect its values => allows data to be shred between controllers  
  3. controllers => used to wire up services, dependencies, and other objects to the view (via scope) & also can handle complex logic in your view  
  4. directives => for working with & modifying the DOM  (ie: mouseenter::mouseleave)  
  5. filters => custom || built in filters => formats the value of an expression in the view templates,controllers or services 



---  

###  view & templates  

  * in angular, the view is a projection of the model through the HTML template  => whenever the model changes angular refreshes the binding points, which updates the view  
  * ng-app='phonecatApp' is the name of the module referencing the controller located in the controllers.js  
  * the phonecatApp module contains PhoneListCtrl where the $scope.phones array is declared  
  * ng-repeat='phone in phones' is a directive that loops through the $scope.phones array => phone is the template databinding to output the application model value  
  *  the current scope inheritance Root scope => ng-app='phonecatApp' => ng-controller='PhoneListCtrl' => repeater scope ng-repeat='phone in phones'  

---  

### model & controller  
  * the data model (simple array) is now instantiated within PhonesListCtrl  
  * the controller is simply a function that takes a $scope parameter  
  * the controller provides a context for the data model & establishes data-binding between the model & view  
  * $scope is a prototypical descendant of the root scope created when the app was defined & is available to all bindings located within ng-controller='PhoneListCtrl'  


---  

### scope  
  * angular uses scopes, along with the info contained in the template, data model, and controller to keep models & views separate, but in sync
  * any changes made to the model are reflected in the view  
  * any changes that occur in the view are reflected in the model  

---  

### tests      
  * 
---  

### directives  

  * built in & custom  => the function arg is dep injected to use inside a directive  
  * custom return obj => restrict A(attribute), E (element),C (class) => templateUrl: path to template or function w/ 2 params (el, attr) => isolating scope key pair namespaceKey: '=value' binds to controllers scope => the value is an attr in the HTML  
  * custom that manupulates the DOM => The link function takes 3 args (scope, element, attrs) scope => angular scope obj, element => jqLite wrapped element of the directive, attrs => hash obj with key value pairs & corresponding attr values  
  * custom that wraps other elements => 
  * transcude: true (transculsion appends directive element into the templateUrl include) => ng-transclude  
  * 
  


---  
### 
## resources  
  * [youtube John Lindquist](https://www.youtube.com/watch?v=Lx7ycjC8qjE&list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7)  
  * [when to use dir,cont,ser in ng Kirk Bushell](http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/)  
  * [egghead.io](https://egghead/technologies/angularjs)  
  * [stackoverflow list](http://stackoverflow.com/questions/14333857/how-to-master-angularjs)  

---  

* map out angular / meanstack knowlege/learning  

*  



