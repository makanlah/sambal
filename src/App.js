import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var https = require('https');

class App extends Component {
  constructor() {
    super();
    this.state = {
      toSearch: "",
      recipe: [],
      page: 1,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  getRecipe() {
    let request = {};
    if (this.state.toSearch.length === 0) {
      alert('Input cannot be empty!');
      return;
    }
    request = this.state.toSearch;
    this.httpsPost(request, result => {
      let existingState = this.state;
      existingState.recipe = JSON.parse("[" + result + "]")[0];
      this.setState(existingState);
    })
  }

  httpsPost(data, callback, path) {
    var post_options = {
      host:  'api.sambal.life',
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(data))
      }
    };

    var post_req = https.request(post_options, res => {
      res.setEncoding('utf8');
      var returnData = "";
      res.on('data', chunk =>  {
        returnData += chunk;
      });
      res.on('end', () => {
        console.log(returnData)
        callback(returnData);
      });
    });
    post_req.write(JSON.stringify(data));
    post_req.end();
  }
}

export default App;
