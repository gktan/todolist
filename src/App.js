import React, { Component } from 'react'; 

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';

class App extends Component {

  render() {
    return (
       <div className="App">
            <h1>To-Do List</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
  }
}

export default App;



