const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  app.get("/", (req, res) => {
    res.send("Users Manegment Server");
  });
  console.log(`App is running on ${port}`);
});