import React, {Component} from 'react';

class TaskList extends Component {
  render(){
    return(
      <div className="one-task-container">
        <p>{this.props.text}</p>
        <button>
          Delete
        </button>
      </div>
    );
  }
}

export default TaskList;
