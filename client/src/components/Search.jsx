import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
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
    $.ajax({
      type: 'POST',
      url: '/repos',
      dataType: 'json',
      sucess: function(query){console.log('sucessful')},
      error: function(err){console.log(err)},
    })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/> 
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;