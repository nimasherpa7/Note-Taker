const router = require('express').Router();

const Store = require('../helpers/store');


router.get('/notes', async (req, res) => {
  console.info(`${req.method} request received for notes`);

  try {
   
    const savedNotes = JSON.parse(await new Store().read());
    console.log(savedNotes)
    res.json(savedNotes);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/notes', async (req, res) => {

  console.info(`${req.method} request received to save note`);

  
if (req.body.title || req.body.text) {
   
    const newNote = new Store();
    await newNote.addNote(req.body);

    
    const response = {
      status: 'error',
      body: newNote,
    }
    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});


module.exports = router;