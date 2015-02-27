var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8080;

var doResponse = function(response, ext, file){


    if(ext === ".svg"){
    response.writeHead(200, {
                "Content-Type": "image/svg+xml"
            });
    response.write(file, "binary");
    response.end();
        return;
    }

    if(ext === ".js"){
    response.writeHead(200, {
                "Content-Type": "text/javascript"
            });
    response.write(file, "binary");
    response.end();
        return;
    }

     if(ext === ".css"){
    response.writeHead(200, {
                "Content-Type": "text/css"
            });
    response.write(file, "binary");
    response.end();
        return;
    }

    response.writeHead(200);
    response.write(file, "binary");
    response.end();
}

http.createServer(function(request, response) {

    var uri = url.parse(request.url).pathname,
        filename = path.join(process.cwd(), uri);
    console.log(uri, filename);
    fs.exists(filename, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not Found\n");
            response.end();
            return;
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
            console.log(filename, ext);

            doResponse(response, ext, file);
            
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");