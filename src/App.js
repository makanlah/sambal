/*jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';
var https = require('http');

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipe: [],
      page: 1,
    };
  }

  render() {
    return (
      /* jshint ignore:start */
      <div className="App">
        <form className="Main-form" onSubmit={this.getRecipe.bind(this)} style={{height: '30px'}}>
          Food name: <input type="text" ref="toSearch" style={{width: 100}}/> <br/>
          <input type="submit" value="Submit"/>
        </form>
        {this.state.recipe}
      </div>
      /* jshint ignore:end */
    );
  }

  getRecipe(e) {
    let request = {};
    if (this.refs.toSearch.value.length === 0) {
      alert('Input cannot be empty!');
      return;
    }
    request = "{ \"content\": \"" + this.refs.toSearch.value + "\" }";
    this.httpsPost(request, result => {
      let existingState = this.state;
      existingState.recipe = JSON.parse("[" + result + "]")[0];
      console.log(result);
      this.setState(existingState);
    });
    e.preventDefault();
  }

  httpsPost(data, callback) {
    var post_options = this.requestOption(data, 'POST');

    var post_req = https.request(post_options, res => {
      res.setEncoding('utf8');
      var returnData = "";
      res.on('data', chunk =>  {
        returnData += chunk;
      });
      res.on('end', () => {
        callback(returnData);
      });
    });
    post_req.write(JSON.stringify(data));
    post_req.end();
  }

  httpsGet(data, callback) {
    var get_options = this.requestOption(data, 'GET');

    var get_req = https.request(get_options, res => {
      res.setEncoding('utf8');
      var returnData = "";
      res.on('data', chunk =>  {
        returnData += chunk;
      });
      res.on('end', () => {
        callback(returnData);
      });
    });
    get_req.write(JSON.stringify(data));
    get_req.end();
  }

  requestOption(data, type) {
    return {
      host:  '127.0.0.1', 
      path: '/todo/api/v1.0/recipes/',
      port: 5000,
      method: type,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(data))
      }
    };
  }
}

export default App;
