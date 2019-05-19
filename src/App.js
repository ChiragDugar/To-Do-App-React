import React, {Component} from 'react'
import Todos from './todos'
import Addtodo from './addtodos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play mario kart" }
    ]
  }

  deletetodo = (id) =>{
    let deleted = this.state.todos.filter(todo =>{
      if(todo.id!==id)
        return todo;
      else 
        return null;
    })
    this.setState({
      todos: deleted
    })
  }

  addtodo = (todo) =>{
    todo.id = Math.random()
    let newtodo = [...this.state.todos,todo]
    this.setState({
      todos: newtodo
    })

  }

  render() {
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={ this.state.todos } deletetodo = { this.deletetodo }/>
          <Addtodo addtodo={ this.addtodo } />
      </div>
    );
  }
}

export default App;
