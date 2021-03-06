const express = require("express");

//creating app
const app = express();

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Cart app listening at http://localhost:${port}");
});

//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("indexs");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
const router = require("./routes/apis");
app.use(router);
