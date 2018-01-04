const bodyParser = require('body-parser')
const express = require('express');
const {saverFunc, getTopTwentyFive} = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');
const EventEmitter = require("events").EventEmitter
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

let topResults = new EventEmitter();

topResults.on('update', function() {
	console.log(topResults)
	app.post('/', function(req, res) {
		console.log('also Hi!')
		req.status(200).send(JSON.stringify(topResults))
	})
})

app.get('/repos', function (req, res) {
	getTopTwentyFive(function(top) {
		topResults.data = top;
		topResults.emit('update')
		//console.log('these are the topResults', topResults)
		//console.log('top twentyfive: ', top)
	});
	res.status(200).send('success');
});

app.post('/repos', function (req, res) {


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
	res.status(200).send(JSON.stringify(JSON.stringify(topResults)));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

