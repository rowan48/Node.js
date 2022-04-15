module.exports = (app)=>{
  app.get('/',function (req, res,next){
    res.send("welcome to maze runner");

  })
}