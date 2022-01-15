import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import MovieItem from './components/MovieItem/MovieItem';

import './reset.css';
import './common.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
        <Route path="/components" exact component={MovieItem} />
      </div>
    );
  }
}

export default App;
