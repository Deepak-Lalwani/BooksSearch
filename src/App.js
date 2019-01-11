import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall'
import {Redirect} from 'react-router';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      keyword : "",
      api : [],
      redirectToReferrer : false
    }

    this.getKeyword = this.getKeyword.bind(this);
  }

  getKeyword(e){
    e.preventDefault()
    
    console.log(this.refs.search.value);

    var keyword = this.refs.search.value;
    this.setState({keyword});
    this.props.router.push({
      pathname : '/Apicall',
      state: {
        keyword : keyword
      }
    });
        
  }

  render() {
  console.log(this.state.redirectToReferrer);
    return (
      <div className="App">
        <form onSubmit={this.getKeyword}>
          <div><input type="text" ref="search" placeholder="Search here"/></div>
        </form>
      </div>
    );
  }
}

export default App;
