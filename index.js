const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// middlwwae
app.use(cors());
app.use(express.json());

// Local Database
const users = [
  { id: 1, name: "alamin", email: "alamin@gmail.com" },
  { id: 2, name: "alom", email: "alom@gmail.com" },
  { id: 3, name: "alim", email: "alim@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Manegment Server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log("Post api hitting");
  res.send(user);
  console.log(user);
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
