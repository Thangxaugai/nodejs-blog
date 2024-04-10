const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
// Đăng ký thư mục public
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/post", (req, res) => {
    res.render("post")
})


app.listen(4000, () => {
    console.log("App listening on http://localhost:4000");
})
