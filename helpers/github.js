const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, cb, callback) => {
  
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      var info = JSON.parse(body);
        callback(info, cb);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;