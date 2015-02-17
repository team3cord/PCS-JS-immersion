var http = require('http'),
    url  = require('url'),
    path = require('path'),
    fs   = require('fs');

http.createServer(function(request, response){
  var my_path = url.parse(request.url).pathname;
  var full_path = path.join(process.cwd(),my_path);
  fs.exists(full_path, function(exists){
  if(!exists){
    response.writeHeader(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found\n");
    response.end();
  }
  else{
    fs.readFile(full_path, "binary", function(err, file){
      if(err){
        response.writeHeader(500, {"Content-Type": "text/plain"});
        response.write(err + '\n');
      }
      else{
        response.writeHeader(200);
        response.write(file, "binary");
        response.end();
      }
    });
    console.log(full_path); 
  }
  });


}).listen(8080);


