import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import './App.css';
import AddTodo from './components/AddTodo';

class App extends Component {
 state = {
   todos: [
    {
      id: 1,
      title: 'church tomorrow',
      completed: false
    },
    {
      id: 2,
      title: 'meeting with boss',
      completed: false
    },
    {
      id: 3,
      title: 'uploading video on channel',
      completed: false
    },
   ]
  
 }

  markComplete = (id) => {
    this.setState ({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      } return todo;
    }) });
  }

  delTodo = (id) => {
      this.setState({ todos:[...this.state.todos.filter(todo => todo.id
        !== id)] })
  }


  
  addTodo = (title) => {
    const newTodo = {
          id: 4,
          title,
          completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render () {

    return (
      <div className='App'>
        <div className= 'container'>
          <Header />
          <AddTodo addTodo = { this.addTodo } />
          <Todos todos = { this.state.todos} 
          markComplete = {this.markComplete} 
          delTodo = { this.delTodo } />
        </div>
          
      </div>
    );
  }
}


export default App;

