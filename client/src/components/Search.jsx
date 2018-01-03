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
    console.log(this)
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localHost:3000',               //check here for error
    //   dataType: 'json',
    //   sucess: function(){console.log('sucess')}.bind(this),
    //   error: function(){console.log('not a sucess')}.bind(this),
    // })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/> 
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;