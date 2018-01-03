const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  
  let options = {
    url: `https://api.github.com/${username}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  request.get(`https://api.github.com/${username}/repos`, function(err, res, body) {
      let json = json.parse(body);
      console.log('inside get getReposByUsername')
      console.log(json)
  })



  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

}

module.exports.getReposByUsername = getReposByUsername;