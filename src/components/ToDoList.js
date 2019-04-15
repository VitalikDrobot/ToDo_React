import React, {Component} from 'react';
import TaskList from './TaskList';
import TodoList from './TodoList.css';

class ToDoList extends Component {
  state = {
    list: [],
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
        <input
          value={this.state.valueInput}
          onChange={this.handleChangeInput}
          type="text"
        />
        <button onClick={this.addTaskToList} >
          Add task
        </button>
        <div className="task-container">
            {
              this.state.list.map((task, index) => (
                <TaskList
                  text={task}
                  index={index}
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
