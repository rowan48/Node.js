/*
* create the schema of the db
* */
//
const RunnersController = require('../controllers/runners_controllers');

module.exports = (app)=>{
    app.get('/api/runners', RunnersController.all)
    app.post('/api/runners', RunnersController.create_runner)
    app.put('/api/runners/:id', RunnersController.edit)
    app.delete('/api/runners/:id',  RunnersController.delete)
    app.get('/api/runners/:id', RunnersController.details)
}
