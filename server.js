// dependencies
const express = require('express');
const path = require('path');

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
    // create data

    // access the new note data from 'req'

    // push it to exisiting list of notes

    // write my updated note list to the 'db.json' file
    res.json({ success: true});
});


// Wildcard route to direct users back to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html') );
});



// listening for when the server is connected to the PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);