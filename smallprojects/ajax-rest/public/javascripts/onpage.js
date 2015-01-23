
  var request = new XMLHttpRequest();
  request.onload = function(){
    var ourAjax = this.responseText;
    jsonObj = JSON.parse(ourAjax);
    console.log(jsonObj.repository['type']); // or as jsonObj.repostitory.type dot notation
    //onsole.log(ourAjax); 
  };
  request.open('get', '/getme.json');
  request.send();

  // --------------------------------------------- flicker ------;
  
  var scriptTag = document.createElement('script');

  scriptTag.src = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&name=value&api_key=502bddfc0a6ded77873b2aa01dfafec8&user_id=129077414%40N05&format=json&jsoncallback=doIt';
 
  document.body.appendChild(scriptTag);

window.doIt = function(data){
  console.log(data.photos.photo[0].id);

};
  
