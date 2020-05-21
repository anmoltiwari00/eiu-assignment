//core imports
import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//container & component imports
import Dashboard from './containers/Dashboard/dashboard';
import NotFound from './components/notFound';
//css imports
import styles from './App.module.css';

export class App extends React.Component {
  render() {
    return(
      <Router basename="/">
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(App);
