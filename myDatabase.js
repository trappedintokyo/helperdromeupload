var express = require("express");
var mongoose = require("mongoose");
var SubmissionsModel = require("./models/Submissions");
const Submissions = require('./Submissions');

let myDatabase = function() {
}



myDatabase.prototype.postSubmissions = function(submissions,res) {
  console.log(submissions);
  SubmissionsModel.create(submissions,function(error,info) {
    console.log("hit sumbissions");
      if (error) {
        console.log(error);
          return res.json({retVal:false});
      }
      return res.json({retVal:true});
  });
}

module.exports = myDatabase;