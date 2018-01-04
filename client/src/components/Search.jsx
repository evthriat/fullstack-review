import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      topRepos: null,
    };
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    var query = this.state.term
    var data = {'userName': query}
    var context = this;
    console.log(query)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(repoList){
                                  context.setState({topRepos: JSON.parse(repoList)}); 
                                  console.log(JSON.parse(repoList))
                                },
      error: function(err){console.log(err)},
    })
  }



  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange.bind(this)}/> 
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;