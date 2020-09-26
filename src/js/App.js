import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './pages/Home';
import Table from './pages/Table';

const StyledLink = styled(Link)`
  padding: 10px 20px 10px 0px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/table">Table</StyledLink>
          </Toolbar>
        </AppBar>
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
