const express = require("express");

//creating app
const app = express();

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Cart app listening at http://localhost:${port}");
});

//send an HTTP response when recieving HTTP GET /
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.sendFile("index");
});

//route for contacts
app.set("view engine", "ejs");
app.get("/contacts/", (req, res) => {
  res.render("contacts");
});

//handling static HTML and EJS templates
