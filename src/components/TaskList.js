import React, {Component} from 'react';

class TaskList extends Component {

  render(){
    return(
      <div className="one-task-container">
        <p>{this.props.text}</p>
        <button onClick={()=> {this.props.removeTask(this.props.index)}}>Delete</button>
      </div>
    );
  }
}

export default TaskList;
