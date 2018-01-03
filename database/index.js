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
  aurtor: String, 			//owner.login
  id: Number, 				  //owner.id
  reponame: String, 		//name
  url: String, 				  //url
  forks: Number, 			  //forks_count
  watchers: Number, 		//watcher_countreact methods seperated by comma
  stars: Number, 			  //stargazer_count
  updated_at: String, 	//updated_at
  created_at: String, 	//created_at
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/*the body of an individual repo*/) => {
 //  var tempRepo = new Repo {
 //    aurtor:     owner.login,
 //    id:         id,
 //    reponame:   name,
 //    url:        url,
 //    forks:      forks_count,
 //    watchers:   watcher_count,
 //    stars:      stargazer_count,
 //    updated_at: updated_at,
 //    created_at: created_at,
 //  };
console.log('hi')
 //  //if  tempRepo.id exists
 //    //if updated_at is more recent than existing repo
 //      //udpate/replace existing repo
 //    //else ignore
 // tempRepo.save(function(err, tempRepo) {
 //  if(err) {
 //    return console.error(err);
 //  };
 //  console.log('saved');
 //  } 
}

module.exports.save = save;

