var express = require("express");
var mongoose = require("mongoose");
var SubmissionsModel = require("./models/Submissions");
const Submissions = require('./Submissions');

let myDatabase = function() {
}



myDatabase.prototype.postSubmissions = function(submissions,res) {
  let obj = {describe:submissions.describe,location:submissions.location,proof:submissions.proof,related:submissions.related};
  SubmissionsModel.create(obj,function(error,info) {
      if (error) {
          return res.json({retVal:false});
      }
      return res.json({retVal:true});
  });
}

module.exports = myDatabase;