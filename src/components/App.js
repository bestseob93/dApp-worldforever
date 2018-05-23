import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Campaigns, News, Notice } from 'pages';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/News" component={News} />
        <Route path="/Notice" component={Notice} />
      </Switch>
    </Fragment>
  );
}

export default App;
