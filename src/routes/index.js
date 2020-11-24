const router = require("express").Router();

router.post("/notify", (request, response) => {
  console.log(request.body, "request.body");
  return response.status(201).json({
    message: "success",
    status: 201,
  });
});

module.exports = (server) => server.use("/", router);
