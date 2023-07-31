const path = require('path')
const express = require('express')
const app = express()
const handlebars = require("express-handlebars");
const port = 3000


app.use(express.static(path.join(__dirname,'public')))
//template engine
app.engine("hbs", handlebars.engine({
  extname:'.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log(path.join(__dirname, 'resources/views'))

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/new", (req, res) => {
  res.render("new");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});