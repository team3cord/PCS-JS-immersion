# Json Web Tokens  (jot)  

---  

* persisting user sessions  => cookies & || tokens  
* cookies are browser based and native mobile apps have problems working with them  
* cookies require you to handle cross site requrest forgery (CSRF) & cross origin resource sharing (CORS) can be an issue  
* [angular tips](http://angular-tips.com/blog/2014/05/json-web-tokens-introduction/)  

---  

### JWT  


1 header  
  * type of token: {typ: 'JWT', alg: 'HS256'}
  * algorithm name: 
2 payload    
  * information to pass: {userid:2, admin: true}
3 signature  

---  

### Session storage  

* ng user.svc.js =>  $window.localStorage.setItem('access_token',response.data); on the login  
* saves to local storage  
* check local storage when the app starts login current user???  
* 
