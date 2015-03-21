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
* ng module dependency injects 'ngRoute' => configures routes (routes.js) connects to controllers & template partials  
* app.ctrl login.ctrl register.ctrl user.svc => manage login/reg process connecting to the user/sessions/server-aut endpoints in app/controllers  
* using jwt (jot) & $window.localStorage => save session token  
* need to check at app start for jwt in localstorage & login user is present  
*   


---  

### Tech advisor notes 3.19.15  

1) node_modules and bower_components should be committed to the repo. http://addyosmani.com/blog/checking-in-front-end-dependencies/
2) Rewrite this line https://github.com/apinfodesign/fullpixel/blob/master/app/controllers/routes.js#L9 to something like this: http://stackoverflow.com/a/25463996/3732163
3) I’d like to see the ‘ng’ folder separated from the public/js folder since it’s their source code. And public/js could be ignored with gitignore.
4) No need to assign the application to a global variable. https://github.com/apinfodesign/fullpixel/blob/master/public/js/ng/controllers/module.js#L1
5) Not using controllerAs syntax https://github.com/apinfodesign/fullpixel/blob/master/public/js/ng/controllers/register.ctrl.js#L2
6) UserSvc should handle this logic https://github.com/apinfodesign/fullpixel/blob/master/public/js/ng/controllers/register.ctrl.js#L4-L8
7) UserSvc should store the current logged user so other controllers don’t need to listen for the ‘login’ event.
8) Some services are mixed in with controllers directory.
9) Hardcoded URL: https://github.com/apinfodesign/fullpixel/blob/master/public/js/ng/controllers/list.svc.js#L7

That’s all I have for now. I tried running the application. It seems as though images are being uploaded but the file names do not change no matter how many times you upload the same image. They’ll want to look at that. I couldn’t register or log in.

