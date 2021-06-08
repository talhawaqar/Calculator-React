import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
        <Route path="/" component={Quote} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
