const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const runnerSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    running: {
        type: Boolean,
        default: false
    }
})
// //
const runner = mongoose.model('runner', runnerSchema);//runner is the name of the collection AKA table
module.exports = runner;