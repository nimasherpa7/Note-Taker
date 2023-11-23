//importing 
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
// Promise version of fs.readFile/writefile to make them async
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
  //read method
  read() {
    return readFile('db/db.json', 'utf-8');
  };
  //write method
  write(note) {
    return writeFile('db/db.json', JSON.stringify(note), (err) => err ? console.log(err) : console.info(`Note written to db.json`));
  };

  //add note method that contains get notes method
  addNote = async (note) => {
    //destructuring note obj
    const { title, text } = note;
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    }
    const savedNotes = JSON.parse(await this.read());
    savedNotes.push(newNote);
    this.write(savedNotes);
    //return new saved notes array 
    return savedNotes;
  };
}

module.exports = Store;