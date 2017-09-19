var express = require("express");

const server = express();


server.get("/", function(req, res) {
  res.send("<h1>hello world</h1>");
});

var id = 0;
server.get("/api/server", function(req, res) {
  id++;
  var player =  {
    id: id,
    name: req.query.first,
  }
  res.send(player)
})

server.listen("5000", function() {
  console.log("server is started");
})
