import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Root from './containers/Root';
import Category from './containers/Category';
import Post from './containers/Post';
import CreateEdit from './containers/CreateEdit';
import NoMatch from './components/NoMatch';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable</h1>
        <Categories />

        <Switch>
          <Route exact path="/" render={() => (
            <Root />
          )} />

    	    <Route exact path="/post/:id" component={Post} />

    	    <Route exact path="/category/:name" component={Category} />

    	    <Route exact path="/createEdit" component={CreateEdit} />

    	    <Route exact path="/createEdit/:id" component={CreateEdit} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
