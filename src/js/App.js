import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import NavBar from './nav-bar/components/NavBar';
import '../styles/styles.css';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/table" component={Table} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};
export default App;
