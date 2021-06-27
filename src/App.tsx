import React, { ReactElement } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import AssetList from './scenes/AssetList';

import './App.css';

function App(): ReactElement {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/asset-list">Asssets</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/asset-list">
            <AssetList />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <Container>
      <Row>
        <h2>Dashboard</h2>
      </Row>
    </Container>
  );
}

export default App;
