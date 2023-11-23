//import express router and path
const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'), (err) => err ? console.log(err, 'no notes') : console.log('error'));
});


module.exports = router;