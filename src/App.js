import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import tasks from './sample/tasks.json'
import Tasks from './components/tasks'
import TaskForm from './components/taskform'
import Post from './components/post'

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    // console.log(title, description);
    const addTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1
    }
    this.setState({
      tasks: [...this.state.tasks, addTask]
    })
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    // console.log(newTask);
    this.setState({tasks: newTask})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render() {
    return(
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask}/>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          }}>
          </Route>
          <Route path="/posts" component={Post}>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
