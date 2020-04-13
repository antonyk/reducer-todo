import React, { useState, useReducer } from 'react';
import './App.css';
// components
import Header from './Header'
import TodoList from './TodoList'

const todos = [
  {id: 1, text: "first todo", completed: false},
  {id: 2, text: "buy milk", completed: false},
  {id: 3, text: "third todo", completed: false},
]


function todoReducer(state, action) {
  return state
}


function App() {
  // const [state, dispatch] = useReducer(todoReducer, todos)



  return (
    <div className="App">
      <Header />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
