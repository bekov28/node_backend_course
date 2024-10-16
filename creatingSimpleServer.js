import express from "express";
const server = express();

// Define a simple route
server.get("/", (req, res) => {
  //   res.status(200); or
  res.status(200).send("Hello, world!");
});

// Start the server
server.listen(3010, () => {
  console.log("Server is running on port 3010");
});
