const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.disable("x-powered-by");

require("./src/routes")(server);

module.exports = server;
