const mongoose = require('mongoose');
//const PaperModel = require('./Paper.model');
mongoose.Promise = global.Promise;

const ResultsSchema = new mongoose.Schema({
    user: {
        type: String
    },
    task: {
        type: String
    },
    dataArr: {
        type: Object
    },
    percentArray: {
        type: Object
    },
},
{ timestamps: true });

module.exports = mongoose.model('results', ResultsSchema);