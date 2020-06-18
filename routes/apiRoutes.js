// DEPENDENCIES
const path = require("path");
const noteData = require("../db/db.json");
const fs = require("fs");
const crypto = require("crypto");

// EXPORTS and ROUTING
module.exports = function (app) {
    // API GET Requests
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    // API POST Requests
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        // Creates random ids
        newNote.id = crypto.randomBytes(16).toString("hex");
        console.log(newNote.id)
        noteData.push(newNote);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteData), "utf8", function(err) {
            if (err) {
                throw err;
            }
        });
        res.json(req.body);
    });

     // API DELETE Requests
    app.delete("/api/notes/:id", function (req, res) {
        let noteID = req.params.id;
        for (let i = 0; i < noteData.length; i++) {
            const newID = noteData[i];
            if (newID.id === noteID){
                noteData.splice(i, 1);
                break;
            };
        }

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteData), "utf8", function(err) {
            if (err) {
                throw err;
            }
        });
        res.json(noteData);
    });
};