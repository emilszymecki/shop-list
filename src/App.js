import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import MainInput from './components/MainInput'
import MainList from './components/MainList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
      <MainInput/>
      <Divider />
      <MainList/>
      </Container>
    );
  }
}

export default App;
