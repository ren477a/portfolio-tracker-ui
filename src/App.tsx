import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap';
import AssetList from './scenes/AssetList';


interface AppProps {}

function App({}: AppProps) {
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
