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
  html_url: String, 				  //url
  forks: Number, 			  //forks_count
  watchers: Number, 		//watcher_countreact methods seperated by comma
  stars: Number, 			  //stargazer_count
  updated_at: String, 	//updated_at
  created_at: String, 	//created_at
});

let Repo = mongoose.model('Repo', repoSchema);

let saverFunc = (tempObj) => {
  var tempRepo = new Repo(tempObj);
   tempRepo.save(function(err, tempObj) {
    if(err) {
      return console.error(err);
    };
  })
    console.log('saved');
  






  
  // var tempRepo = new Repo( {
  //   author:     owner.login,
  //   id:         id,
  //   reponame:   name,
  //   url:        url,
  //   forks:      forks_count,
  //   watchers:   watcher_count,
  //   stars:      stargazer_count,
  //   updated_at: updated_at,
  //   created_at: created_at,
  // });
//console.log(Repo)
 //  //if  tempRepo.id exists
 //    //if updated_at is more recent than existing repo
 //      //udpate/replace existing repo
 //    //else ignore
}

module.exports.saverFunc = saverFunc;

