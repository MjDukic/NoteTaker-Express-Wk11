const router = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
    //get all the notes from db.json
    console.info(`RECIEVED YOUR ${req.method} REQUEST`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});

router.post('/', function (req, res) {
    // add a note to the DB
    console.info(`YOUR ${req.method} REQUEST WORKED`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'note is saved',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Note not saved');
    }

});

module.exports = router;