import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages';
import './App.scss';

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Fragment>
  );
}

export default App;
