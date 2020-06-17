
const express = require('express');

const path = require("path");

const fs = require("fs");

const notesData = require("../db/db.json");

const router = express.Router();

router.get("/api/notes", function (req, res) {
  res.json(notesData);
  // res.sendFile(path.join(__dirname, "../db/db.json"))
});




module.exports = router;