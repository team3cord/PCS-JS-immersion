(function(){
  var request = new XMLHttpRequest();
  request.onload = function(){
    console.log(this.responseText); 
    console.log('Success');
  };
  request.open('get', '/getme.json');
  request.send();
})();
