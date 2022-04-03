const mongoose = require('mongoose');
//const PaperModel = require('./Paper.model');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    cname: {
        type: String
    },/* 
    pname: {
        type: String
    }, */
    age: {
        type: String
    },/* 
    number: {
        type: String
    }, */
    gender: {
        type: String
    }, /*  
    lang: {
        type: String
    },
    myfile:{
        type: String
    }, */
},
{ timestamps: true });

module.exports = mongoose.model('users', UserSchema);