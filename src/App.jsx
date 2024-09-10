import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div id="app">
            Site está funcionando
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
