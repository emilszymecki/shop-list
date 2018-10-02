import React, { Component } from 'react';
import MainInput from './components/MainInput'
import MainList from './components/MainList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainInput/>
      <MainList/>
      </div>
    );
  }
}

export default App;
