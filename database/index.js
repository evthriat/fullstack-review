const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
//-----------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected');
})
//-----------------
let repoSchema = mongoose.Schema({
  author: String, 			//owner.login
  id: Number, 				  //owner.id
  repo_name: String, 		//name
  html_url: String, 		//url
  forks: Number, 			  //forks_count
  watchers: Number, 		//watcher_count
  stars: Number, 			  //stargazer_count
  updated_at: String, 	//updated_at
  created_at: String, 	//created_at
});

let Repo = mongoose.model('Repo', repoSchema);

let saverFunc = (tempObj) => {
  let repoId = tempObj.id;
  let query = {id: repoId}
  Repo.find(query, function(err, arrExists) {
    if(!arrExists.length){
      var tempRepo = new Repo(tempObj);
       tempRepo.save(function(err, tempObj) {
        if(err) {
          return console.error(err);
        };
      })
     }
  })
    console.log('saved');
}
//refactor to take a query sort argument so you can have multiple ways to sort
let getTopTwentyFive = (callback) => {

  var query = Repo.find();
 
  query.sort({watchers: 1});
  query.limit(25);
  
  query.exec(function(err, topTwentyFive) {
    if(err) {
      console.log(err)
    }
    callback(topTwentyFive);
  })
}
module.exports.getTopTwentyFive = getTopTwentyFive;
module.exports.saverFunc = saverFunc;

