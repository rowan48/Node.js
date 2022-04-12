/****************************************************************************************************************************************************************************************/
//===================================================routing using http module==========================================================================================================

var http = require('http')//requiring the http module
var fs = require('fs')//require the fs module to open files
const pathsync = require("path");//to detect the paths if needed
http.createServer(function(req, res){
 //========================================================GET Request Handling========================================================================================================
    if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(200, {'content-type': "text/html"})
        var html = fs.readFileSync('homepage.html')
         res.write(html)
    }
    //========================================================POST Request Handling For signup page========================================================================================================
/* first we will check if the data entered already exixts or not
* if exist will display a message to the   user that he/she already have an account
* if not will add the user's data to the user.txt file
* */
    else if(req.url==='/signup' && req.method==='POST' ){
        req.on('data', obj => {
            body += obj;//holding the data of the user on another object to use it
            //=>console.log(`Data chunk available: ${obj}`)//t is used to check the data that the user sent
        // //reading the data in the text file to check iif the data entered already exist or not
       let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
        console.log(rawdata);
           let iti = JSON.parse(rawdata);
           console.log(iti);
            console.log(`chunk : ${obj}`);
               if(iti.email===obj.email || iti.name===obj.name || iti.password===obj.password){//check if the user;s data already exist
               res.writeHead(400, {'content-type': "text/plain"});
               res.write("user already exist");
           } else {//if not
               //==============================================writing the data into the file===================================================================
               res.writeHead(200, {'content-type': "application/json"})
               fs.writeFileSync(pathsync.resolve(__dirname, './user.txt'), obj);
               console.log("finish writiing");
               console.log((obj));
               res.end();
           }
            })
}
    //========================================================POST Request Handling For Login page========================================================================================================
    /*read the data from the file to check if it is found or not
    * if found redirect him to the login with welcome message
    * if not define which data is wrong{name,email,password}
    * */
    else if (req.url==='/login' && req.method==='POST'){
        var body=" ";
        req.on('data', obj => {
            body += obj;
            let bodyj =JSON.parse(body);//parsing the user's object to use it on the check's
            //=>console.log(`Data chunk available: ${obj}`)//checking on the data only on the console if used
            let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
            let iti = JSON.parse(rawdata);
            if (bodyj.email != iti.email) {
                res.writeHead(400, {'content-type': "application/json"})
                message="the email is wrong";
            } else if (bodyj.password != iti.password) {
                res.writeHead(400, {'content-type': "application/json"})
                message="the password is wrong";
            } else {
                res.writeHead(200, {'content-type': "application/json"})
                message = bodyj.name;
            }
            res.writeHead(200, {'content-type': "text/html"})
            var html = fs.readFileSync('./login.html', 'utf8');
            html = html.replace('{message}', message);
            console.log("welcome "+message);//check on the welcome message through the console until adding it to the html file
            res.end();
        })
}
    //========================================================Handling UnKnown Requests========================================================================================================

    else
    {
        res.writeHead(404)
        res.write('page is not found');
        message="page not found";
    }
    res.end()
//
}).listen(3000)
/************************************************************************************************************************************************************************************************/