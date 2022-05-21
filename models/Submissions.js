
var mongoose = require("mongoose");

var Submissions = mongoose.model("submissions",{
	
    describe: String,
    related:String,
    location:String,
    proof:String
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Submissions;