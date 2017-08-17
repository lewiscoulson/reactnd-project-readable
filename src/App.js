import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Root from './containers/Root';
import Category from './containers/Category';
import Post from './containers/Post';
import CreateEdit from './containers/CreateEdit';

import {getPosts} from './actions/postActions';
import {getCategories} from './actions/categoryActions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
	        <Root />
	    )} />

	    <Route exact path="/post/:id" render={() => (
	        <Post />
	    )} />

	    <Route exact path="/category/:name" render={() => (
	        <Category />
	    )} />

	    <Route exact path="/createEdit/:id" render={() => (
	        <CreateEdit />
	    )} />
      </div>
    );
  }
}

export default App;