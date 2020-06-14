const express = require("express");

const app = express();

const PORT = process.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("App listening to PORT: " + PORT);
});