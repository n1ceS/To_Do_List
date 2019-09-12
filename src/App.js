import React,{Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddToDo from './components/AddToDo'
import uuid from 'uuid'

import './App.css'


class App extends Component{
  state = {
    todos: [
      
    ]
  }
  //Mark To do Item as completed
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    }) })
  }
  //Delete To do Item
  deleteToDo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id
      !==id)]})
  }
  //Add To Do Item
  AddToDo = (e) => {
    const newItem = {
      id: uuid.v4(),
      title: e,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newItem]})
  }
  render(){
    return (
      <div className="App">
          <div className="container">
            <Header />
            <AddToDo AddToDo = {this.AddToDo} />
            <Todos 
            todos={this.state.todos}
            markComplete = {this.markComplete}
            deleteToDo={this.deleteToDo}
            />
          </div> 
      </div>
    )
  }
}

export default App;
