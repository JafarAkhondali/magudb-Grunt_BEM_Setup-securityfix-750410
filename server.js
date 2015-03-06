var http = require("http"),
url = require("url"),
path = require("path"),
fs = require("fs")
port = process.argv[2] || 8080;

var contentTypeMap = {
    ".svg" : "image/svg+xml",
    ".js" : "text/javascript",
    ".json" : "application/json",
    ".css" : "text/css",
    ".html": "text/html"

};

var createResponse = function(response , file, contentType){
    var options = {};

    if(contentType){
        options["Content-Type"] = contentType;
    }

    response.writeHead(200, options);
    response.write(file, "binary");
    response.end();
};

var doResponse = function(response, ext, file, filename){
    
     console.log(filename, ext, contentTypeMap[ext]);  
        createResponse(response, file, contentTypeMap[ext]);
  
}

http.createServer(function(request, response) {

    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);
    
    console.log(uri, filename);
    
    fs.exists(filename, function(exists) {
        if (!exists) {
          filename = 'index.html';
        }

        if (fs.statSync(filename).isDirectory()) {filename += '/index.html';}

        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                response.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                response.write(err + "\n");
                response.end();
                return;
            }
            var ext = path.extname(filename);
           

            doResponse(response, ext, file, filename);
            
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");