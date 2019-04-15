import React, {Component} from 'react';
import TaskList from './TaskList';
import TodoList from './TodoList.css';

class ToDoList extends Component {
  state = {
    list: [],
    color: '',
    valueInput: ''
  }

  addTaskToList = () => {
    if (this.state.valueInput){
        this.setState({
          list: [...this.state.list, this.state.valueInput],
          valueInput: ''
        })
    }
      console.log(this.state.list)
  }

  handleChangeInput = (e) => {
    console.log(e.target.value)
    this.setState({
      valueInput: e.target.value
    })
  }

  removeTask = (props)=> {
    this.state.list.splice(props, 1)
    this.setState({list: this.state.list})

    console.log(this.state.list)
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <input
            value={this.state.valueInput}
            onChange={this.handleChangeInput}
            type="text"
          />
          <button onClick={this.addTaskToList} >
            Add task
          </button>
        </div>
        <div className="task-container">
            {
              this.state.list.map((task, key) => (
                <TaskList
                  text={task}
                  key={key}
                  list={this.state.list}
                  removeTask={this.removeTask}
                  >{task}
                </TaskList>
              ))
            }
        </div>
      </div>
    );
  }
}

export default ToDoList;
