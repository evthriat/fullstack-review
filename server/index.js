const bodyParser = require('body-parser')
const express = require('express');
const saverFunc = require('../database/index.js').saverFunc;
const getReposByUsername = require('../helpers/github.js');
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));




app.post('/repos', function (req, res) {

	res.status(200).send('sucessful');
	//console.log('body: ', JSON.stringify(req.body.userName))



	getReposByUsername.getReposByUsername(req.body.userName, saverFunc, function(repos) {

		repos.forEach(function(repo) {
			var tempObj = {
					    author:     repo.owner.login,
					    id:         repo.id,
					    repo_name:  repo.name,
					    html_url:   repo.html_url,
					    forks:      repo.forks_count,
					    watchers:   repo.watcher_count,
					    stars:      repo.stargazer_count,
					    updated_at: repo.updated_at,
					    created_at: repo.created_at,
						};
			//if(/* repo already exists or hasn't been updated */) {
				//console.log('saver function: ', saverFunc)
				saverFunc(tempObj);
				
			//}
		})
	});
	//console.log('repos: ', repos);




  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

