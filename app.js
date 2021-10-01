// require fs = require('fs')
//https://links.mead.io/nodecourse
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// var fs = require("fs");

// fs.writeFile("test.txt", "Hello World!", function (err) {
//   if (err) console.log(err);
//   else console.log("Write operation complete.");
// });

// fs.appendFileSync("notes.txt", " I love Carmel.");
// fs.writeFileSync('notes.txt','This file was created by Node.js')
const chalk = require("chalk");
const getNotes = require(".notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.blue.inverse.bold("Success!");
console.log(greenMsg);
