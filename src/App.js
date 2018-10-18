import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NewsItemList from './components/NewsItemList';
import NewsItemDetail from './components/NewsItemDetail';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={NewsItemList} />
        <Route exact path="/news/:id" component={NewsItemDetail} />
      </Switch>
    );
  }
}

export default App;
