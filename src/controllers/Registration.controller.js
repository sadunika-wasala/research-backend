// const mongoose =require("mongoose");
// const Paper = require('../models/User.model');
// const User = require('../models/Paper.model');

const mongoose = require("mongoose");
const User = mongoose.model('users');
const Results = mongoose.model('results');
//const Paper = mongoose.model('paper');

exports.register = async (req, res) => {

    let user = {
        cname: req.body.cname,
        age: req.body.age,
        gender: req.body.gender,
    }
    // save user
    await new User(user).save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "Something went wrong registering user, please try again later"
            });
        } else {
            res.status(200).json({
                message: "User registered successfuly",
                data: { "user": data }
            });
        }

    });
        
    

}

exports.results = async (req, res) => {

    let results = {
        user: req.body.user,
        task: req.body.task,
        dataArr: req.body.dataArr,
        percentArray: req.body.percentArray,
    }
    // save results
    await new Results(results).save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "Something went wrong saving results, please try again later"
            });
        } else {
            res.status(200).json({
                message: "Results stored successfuly",
                data: { "user": data }
            });
        }

    });
        
    

}
