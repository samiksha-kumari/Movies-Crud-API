const http = require("http");
// require("dotenv").config();
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies");

const PORT = process.env.PORT || 5001

//create  http server

const server = http.createServer((req, res) => {
    req.movies = movies;  // to manipulate the request.
    //switch case for each of the method 
    switch(req.method) {
        case "GET": 
           getReq(req, res);
        break;
        case "POST":
            postReq(req, res);
        break;
        case "PUT":
            putReq(req, res);
        break;
        case "DELETE":
            deleteReq(req, res);
        break;
        default:
        res.statusCode = 404,
        res.setHeader("Content-Type", "application/json"),// because we are going to deal with JSON data
        res.write(JSON.stringify({title: "Not Found", message: "Route not Found"})),
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT} `);
});