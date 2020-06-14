
const express = require('express');

const notesData = require("../db/db");

const router = express.Router();

router.get("/notes", function (req, res) {
  res.json(notesData);
});

router.post("/api/notes", function (req, res) {
  notesData.push(req.body);
});

router.delete("/api/notes/:id", function (req, res) {
  res.json(notesData.filter(notesData => notesData.id === parseInt(req.params.id)))

});


module.exports = router;