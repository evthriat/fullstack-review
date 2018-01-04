const bodyParser = require('body-parser')
const express = require('express');
const {saverFunc, getTopTwentyFive} = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));




app.post('/repos', function (req, res) {

	res.status(200).send('successful');

	getReposByUsername.getReposByUsername(req.body.userName, saverFunc.saverFunct, function(repos) {

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

			saverFunc(tempObj);
		})
	});

});

app.get('/repos', function (req, res) {

	getTopTwentyFive(function(top) {
		console.log('top twentyfive: ', top)
	});
	res.status(200).send('success');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

