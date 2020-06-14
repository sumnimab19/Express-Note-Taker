const express = require("express");

const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, function(){
    console.log("App listening to PORT: " + PORT);
});