const router = require("express").Router();
// const fs = require('fs');
// const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
    //get all the notes from db.json
    console.info(`GOT YOUR ${req.method} REQUEST`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    
});

router.post('/', (req, res) => {
    // add a note to the DB
    console.info(`GOT YOUR ${req.method} REQUEST`);

});

module.exports = router;