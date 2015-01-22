(function(){
  var request = new XMLHttpRequest();
  request.onload = function(){
    ourAjax = this.responseText;
    jsonObj = JSON.parse(ourAjax);
    console.log(jsonObj.repository['type']);
    console.log(ourAjax); 
  };
  request.open('get', '/getme.json');
  request.send();
})();
