const router = require("express").Router();

router.get('/', (req, res) => {
    //get all the notes from db.json
    res.json(`GOT YOUR ${req.method} REQUEST`);
});

router.post('/', (req, res) => {
    // add a note to the DB
    res.json(`GOT YOUR ${req.method} REQUEST`);
});

module.exports = router;