import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import rootReducer from './reducer';
import { createStore } from 'redux';

/* CHECKING STORES DATA HERE; Therefore not using Provider tp flow Data into Main; Just Checking Here */
const store = createStore(rootReducer);
console.log("Stored Data", store.getState());

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Main/>
      </div>
    );
  }
}

export default App;
