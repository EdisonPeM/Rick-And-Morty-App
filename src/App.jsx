import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'Components/Shared/Layout';

import Home from 'Pages/Home';
import CharactersPage from 'Pages/CharactersPage';
import NotFound from 'Pages/NotFound';

import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={CharactersPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
