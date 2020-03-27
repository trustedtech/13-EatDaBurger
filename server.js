const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require("./routes/routesAPI")(app);
require("./routes/routesHTML")(app);

app.listen(PORT, function() {
  console.log("App is now listening on PORT: " + PORT);
});