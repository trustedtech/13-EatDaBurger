const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;
// const routes = require("./controllers/burgers_controller.js");
require("./routes/routesAPI")(app);
require("./routes/routesHTML")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App is now listening on PORT: " + PORT);
});