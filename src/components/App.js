import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const calcStyle = {
  width: '100vw', height: '93vh', backgroundColor: '#31AFD4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
};

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" render={() => (<div style={calcStyle}><Calculator /></div>)} />
        {/* <Route path="/calculator" component={Calculator} /> */}
        <Route path="/quote" component={Quote} />
        <Route path="/" component={Quote} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
