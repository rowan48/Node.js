const fs = require('fs');//it is required in part2 3 4
//=================Part 1 ===============================
/*1-
create custom module
contain function constructor
inheriting from emitter
this function has on and emit
I can send data from emit and log in on function */
var Emitter = require('./emitter');
var emtr = new Emitter();
emtr.on('start', function(){
    console.log('test 1');
})
emtr.emit('start');
//=================Part 2 ===============================
/*2- 10. How to read a file line by line using node.js?
HINT: Redline Module in Node.js allows the reading of input streamline by line.
 The given node.js code opens the file 'txtfile.txt'
  and returns the content line by line.*/
// Importing the Required Modules
const readline = require('readline');
// readline module reads line by line
const file = readline.createInterface({
    input: fs.createReadStream('txtfile.txt'),
    output: process.stdout,
    terminal: false
});
// Printing the content of file line by
file.on('line', (line) => {
    console.log(line);
});
//=================Part 3 ===============================
/*Create test file with dummy data
3- rename file from test.txt to info.txt
From node docs
 */
// List all the filenames before renaming
getCurrentFilenames();
// Rename the file
fs.rename('test.txt', 'info.txt', () => {
    console.log("\nFile Renamed!\n");
// List all the filenames after renaming
    getCurrentFilenames();
});
// Function to get current filenames
// in directory
function getCurrentFilenames() {
    console.log("Current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
}
//=================Part 4 ===============================
/*
* 4- remove file from info.txt*/
const path = './remove.txt'

try {
    fs.unlinkSync(path)
    console.log('file removed successfully');
} catch(err) {
    console.error(err)
}
//=======================
const pathsync = require('path');
/*5- read data from data.json file
-       as sync
-       as async*/
//=================Part 5 synchronous===============================
/**/
let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'data.json'));
let iti = JSON.parse(rawdata);
console.log(iti);
console.log("done1");//for test the synchronizations

//=================Part 5 asynchronous===============================

var readfile=fs.createReadStream('./data.json', {encoding: 'utf8', highWaterMark: 32*1024})

readfile.on('data',function(chunk){
    console.log(JSON.parse(chunk))
})
console.log("done2");//for test the asynchronizations
//=================Part 6 ===============================
/*6- write file inside file info.txt “hello iti”*/
let data="Hello iti";
fs.writeFileSync(pathsync.resolve(__dirname, './info.txt'), data);
console.log("finish writiing");
//=====================part 7======Bonus=====================
/*7- create Dir -> bonus*/
const pathdir = "./new-Directory";

fs.access(pathdir, (error) => {

// To check if the given directory
// already exists or not
    if (error) {
        // If current directory does not exist
        // then create it
        fs.mkdir(pathdir, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("New Directory created successfully !!");
            }
        });
    } else {
        console.log("Given Directory already exists !!");
    }
});





