// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. 
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// IMPORT ROUTERS
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function () {
  console.log('Listening at PORT 3000');
});