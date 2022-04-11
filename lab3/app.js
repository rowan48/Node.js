
//routing
var http = require('http')
var fs = require('fs')
 const pathsync = require("path");
http.createServer(function(req, res){
    const buffers = [];

    if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(200, {'content-type': "text/html"})
        var html = fs.readFileSync('homepage.html')
//   // recomended

        obj = {
            name: "rowan",
            email: "rowanahmedali",
            password:"rowan"
        }
        res.write(html)
    }
	else if(req.url==='/signup' && req.method==='POST' ){
	// obj = {
	// 	name: "rowan",
	// 	email: "rowanahmedali",
    //     password:"rowan"
	// }
        // console.log("json data");
        obj=req.body;
        console.log("obiid======================================================");
        console.log(obj);
         // console.log("res");
        // console.log(res);
        // console.log(req);
        let data =JSON.stringify(obj);
        //reading the data in the text file to check iif the data entered already exist or not
        let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
        let iti = JSON.parse(rawdata);
        if(JSON.stringify(iti) === JSON.stringify(obj)){
            res.writeHead(400, {'content-type': "text/plain"});
            res.write("user already exist");

        }else{
            //==============================================writing the data into the file===================================================================
            res.writeHead(200, {'content-type': "application/json"})
            fs.writeFileSync(pathsync.resolve(__dirname, './user.txt'), data);
            console.log("finish writiing");
            // ==============================================writing the data into the file====================================================================

            res.write(JSON.stringify(obj))

        }


}
else if (req.url==='/login' && req.method==='POST'){
        obj = {
            name: "rowan",
            email: "rowanahmedali",
            password:"rowan"
        }
        console.log(req);

        let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
        let iti = JSON.parse(rawdata);
        if (obj.email != iti.email){
            res.writeHead(400, {'content-type': "application/json"})
            console.log("the email is wrong");
        }else if (obj.password !=iti.password){
            res.writeHead(400, {'content-type': "application/json"})

            console.log("the password is wrong")
        }else{
            res.writeHead(200, {'content-type': "application/json"})
            res.write(JSON.stringify(iti))

        }
}
    else
    {
        res.writeHead(404)
        res.write('page is not found');
    }
    res.end()
//
}).listen(3000)
