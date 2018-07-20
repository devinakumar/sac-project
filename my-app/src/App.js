import React, { Component } from 'react';
import './App.css';

// calling the connect wrapper and the function created in the actions section
import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {
/* eslint-disable no-console */



  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default.payload
  };
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, { defaultFunction })(App);
