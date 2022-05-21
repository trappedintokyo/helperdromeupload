let path = require("path");
let express = require("express");
var mongoose = require("mongoose");   //new

let router = express.Router();

// router.get("/",function(req,res){
// 	res.sendFile(path.resolve(__dirname,"submit.html"));
// });

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Submissions = require('./Submissions');

router.post('/create', function(req, res){
	console.log("in routes")
	//console.log(req);
	if (req.body.describe == "") {
		console.log("in if state in routes")
		res.json({retVal:false});
		return;
	}
	let obj = new Submissions(req.body.describe,req.body.location,req.body.related,req.body.proof);
	//console.log(obj);
	return(db.postSubmissions(obj,res));
});

module.exports = router;
