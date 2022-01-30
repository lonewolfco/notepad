// dependencies
const express = require('express');
const path = require('path');
const fs = require ('fs');

// helper method for generating unique ids
const uuid = require('./helpers/uuid');

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

    newNote.id =   Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

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

// app.post('/api/notes', (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to add a note`);
  
//     // Destructuring assignment for the items in req.body
//     const { title, text} = req.body;
  
//     // If all the required properties are present
//     if (title && text) {
//       // Variable for the object we will save
//       const newNote = {
//         title,
//         text,
//         note_id: uuid(),
//       };
  
//       // Obtain existing reviews
//       fs.readFile('./db/db.json', (err, data) => {
//         if (err) {
//           console.error(err);
//         } else {
//           // Convert string into JSON object
//           const parsedNote = JSON.parse(data);
  
//           // Add a new review
//           parsedNote.push(newNote);
  
//           // Write updated reviews back to the file
//           fs.writeFile(
//             './db/db.json',
//             JSON.stringify(parsedNote, null, 3),
//             (writeErr) =>
//               writeErr
//                 ? console.error(writeErr)
//                 : console.info('Successfully updated notes!')
//           );
//         }
//       });
  
//       const response = {
//         status: 'success',
//         body: newNote,
//       };
  
//       console.log(response);
//       res.status(201).json(response);
//     } else {
//       res.status(500).json('Error in posting note');
//     }
//   });
  

// Wildcard route to direct users back to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html') );
});



// listening for when the server is connected to the PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);