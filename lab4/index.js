const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const pathsync = require("path");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/static', express.static("static"));

app.get('/', function (req, res) {
   // res.send('Hello World')
    res.sendFile(path.join(__dirname, '/homepage.html'));
})
//========================================================POST Request Handling For signup page========================================================================================================
/* first we will check if the data entered already exists or not
* if exist will display a message to the   user that he/she already have an account
* if not will add the user's data to the user.txt file and redirect the user to signup page
* */

app.post('/signup', function(req, res) {
    obj=req.body;
    /*
    * first:check if this user already have an account
    * if it have send a message user already exist
    * if not send him to signup page
    * */
    //read the data of the users from user.txt file
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'user.txt'));
   let filedata = JSON.parse(rawdata);
    console.log(filedata);
        if(filedata.email===obj.email || filedata.name===obj.name || filedata.password===obj.password){//check if the user;s data already exist
            res.send('<html><head></head><body><h1>user already exist</h1></body>');
    }
    else{
            //==============================================writing the data into the file===================================================================
            fs.writeFileSync(pathsync.resolve(__dirname, './user.txt'),JSON.stringify(req.body));
            res.sendFile(path.join(__dirname, '/signup.html'));
    }
});
//========================================================POST Request Handling For Login page========================================================================================================
/*read the data from the file to check if it is found or not
* if found redirect him to the login page
* if not define which data is wrong{name,email,password}
* */
app.post("/login", (req, res) => {
    obj=req.body;
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'user.txt'));
    let filedata = JSON.parse(rawdata);
    if (obj.email != filedata.email) {
        res.send('<html><head></head><body><h1>the email is wrong</h1></body>');
    } else if (obj.password != filedata.password) {
        res.send('<html><head></head><body><h1>the password is wrong</h1></body>');
    } else {
        res.sendFile(path.join(__dirname, '/login.html'));
    }
})

//===========================================================Handling Un Known Requests=====================================================================================
app.get('*', function (req, res) {
    res.sendFile(__dirname+'/error.html');
})
app.post('*', function (req, res) {
    res.sendFile(__dirname+'/error.html');
    /**/
})
app.listen(3000)