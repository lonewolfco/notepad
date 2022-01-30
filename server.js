// dependencies
const express = require('express');
const path = require('path');
const fs = require ('fs');

// helper method for generating unique ids
const uuid = require('./helpers/uuid');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;


// const api = require('./routes/index');
// const noteJson = require('./db/db');

app.use(express.static('public'));


// Parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// require notes JSON file
const noteLog = require('./db/db.json');


// Function to rewrite data to JSON db
// function writeDB(notes){
//     let jsonFilePath = path.join(__dirname, "/db/db.json");
//     // Converts new JSON Array back to string
//     fs.writeFile(jsonFilePath, JSON.stringify(noteLog), (err) => {
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log('Note Saved!');
//         };

//     });
// }

// GET Route for homepage
app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '/public/index.html') );

});

// GET Request: /notes route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html') );

});

// GET Request: read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  res.json(noteLog);
});

// POST Request: 
app.post('/api/notes', (req, res) => {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    newNote = req.body;

    newNote.id =  uuidv4();

    noteLog.push(newNote);

    fs.writeFile(jsonFilePath, JSON.stringify(noteLog), (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Note Saved!');
        };

    });

    res.json(newNote);

    });

    // DELETE request: Delete a note :D
    app.delete("/api/notes/:id", function(req, res){
        
        // Obtains id and converts to a string
        let id = req.params.id.toString();

        // Goes through notesArray searching for matching ID
        for (i=0; i < noteLog.length; i++){
           
            if (noteLog[i].id == id){
                // responds with deleted note
                res.send(noteLog[i]);
                // Removes the deleted note
                noteLog.splice(i,1);
                break;
            };
        };

        // Write notes data to database
        let jsonFilePath = path.join(__dirname, "/db/db.json");
        // Converts new JSON Array back to string
        fs.writeFile(jsonFilePath, JSON.stringify(noteLog), (err) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('Note Trashed');
            };
    
        });

    });



// Wildcard route to direct users back to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html') );
});



// listening for when the server is connected to the PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);