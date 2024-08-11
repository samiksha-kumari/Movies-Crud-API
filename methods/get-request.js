module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];
    if(req.url === "/api/movies") {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json"); 
                //to send the data
                res.write(JSON.stringify(req.movies.movies)); //movies which are fetching from the movie json file.
                res.end();
        }
        // else if (!id) {
        //     res.writeHead(400, { "Content-Type": "application/json" });
        //     res.end(JSON.stringify({
        //         title: "Validation failed",
        //         message: "UUID is missing or not valid",
        //     }));
        // }
        else if (baseUrl === "/api/movies/") {
            res.setHeader("Content-Type", "application/json");   
            // Find the movie with the given ID
            let filteredMovie = req.movies.movies.find((movie) => {
                return movie.id.toString() === id;
            });
            if (filteredMovie.length !== null) { // Check if the movie was found
                res.statusCode = 200;
                res.write(JSON.stringify(filteredMovie));
                res.end();
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
                res.end();
            }
        }
        else {
           res.writeHead(404,{"Content-Type": "application/json"});
           res.end(JSON.stringify({title: "Not Found", message: "Route not Found"}));
      }
}
