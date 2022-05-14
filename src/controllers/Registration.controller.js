// const mongoose =require("mongoose");
// const Paper = require('../models/User.model');
// const User = require('../models/Paper.model');

const mongoose = require("mongoose");
const User = mongoose.model('users');
const Results = mongoose.model('results');
const { Parser } = require("json2csv");
const fs = require('fs');
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

    var user = req.body.user;
    var task = req.body.task;
    var dataArray = req.body.dataArr;
    var flattenedArrayFull = [];
    for (let slide in dataArray) {

        flattenedArray = dataArray[slide].map((x) => {
            x['task']=task;
            x['user']=user;
            x['slide']=slide;
            return x;
        });
        flattenedArrayFull = flattenedArrayFull.concat(flattenedArray);

    }
    console.log("========================")
    console.log(flattenedArrayFull)
    console.log("========================")


    //csv file creation part start
    const fields = ['task', 'user', 'slide', 'x', 'y', 'bb', 'type', 'timestamp'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(flattenedArrayFull);

    const content = csv;

    //fs.writeFile('/Users/INSIGHT/Desktop/research/vc/research-backend/results/'+req.body.task+'_'+req.body.user+'_'+Date.now()+'.csv', content, { flag: 'w+' }, function (err) {
    fs.writeFile('./results/'+req.body.task+'_'+req.body.user+'_'+Date.now()+'.csv', content, { flag: 'w+' }, function (err) {
        if (err) throw err;
        console.log("It's saved!");
    });

//csv file creation part end

    // save results
    await new Results(results).save((err, data) => {
        if (err) {
            console.log("failed to save result");
            console.log(err)
            res.status(500).json({
                message: "Something went wrong saving results, please try again later"
            });
        } else {
            console.log("results saved")
            // console.log(data)
            res.status(200).json({
                message: "Results stored successfuly",
                data: { "user": data }
            });
        }

    });



}
