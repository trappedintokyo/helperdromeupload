
const Submissions = require('./Submissions');

let myDatabase = function() {
	this.submissions = [];
}

let submissionIndex = 0;



myDatabase.prototype.postSubmissions = function(submissions,res) {
  for (let i=0;i<this.submissions.length;i++) {
    if (this.submissions[i] && this.submissions[i].ident == submissions.ident) {
      res.json({retVal:false});
      return;
    }
  }
	this.submissions[submissionIndex++] = new Submissions(submissions.describe,submissions.location,submissions.related,submissions.proof);
  res.json({retVal:true});

}

module.exports = myDatabase;