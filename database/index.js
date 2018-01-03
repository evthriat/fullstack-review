const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  aurtor: String, 			//owner.login
  id: Number, 				//owner.id
  reponame: String, 		//name
  url: String, 				//url
  forks: Number, 			//forks_count
  watchers: Number, 		//watcher_countreact methods seperated by comma
  stars: Number, 			//stargazer_count
  updated_at: String, 		//updated_at
  created_at: String, 		//created_at
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;