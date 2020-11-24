const server = require("./server");

server.listen(8080, () => {
  console.log(`NGROK server is running on 8080 in development mode`);
});
