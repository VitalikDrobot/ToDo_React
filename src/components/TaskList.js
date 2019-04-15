import React, {Component} from 'react';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      color: '#000'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({color: 'green'});
  }
  
  render(){
    let styles = {};
    if (this.state.color) {
      styles.color = this.state.color;
    }
    return(
      <div className="one-task-container">
        <input className="radio" type="radio" onClick={ this.handleClick } />
        <p style={styles}>{this.props.text}</p>
        <button onClick={()=> {this.props.removeTask(this.props.key)}}>Delete</button>
      </div>
    );
  }
}

export default TaskList;
