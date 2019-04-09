import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
