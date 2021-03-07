import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { addTodo } from "../redux/action";
import '../App.css';

class TodoInput extends Component {
    handleSubmit = (e) => {
            e.preventDefault();
            let task = e.target.task.value;
            this.props.onTodoClick(task);
            e.target.reset();
    }

    render() {
      return (
        <div className="main">
            <form 
                onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="task" 
                    placeholder="Enter task" 
                />
                <button className="addItem" >Add</button>
            </form>
        </div>
      )
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (task) => {
            dispatch(addTodo(task));
        }
    }
};

export default connect(
    null, 
    mapDispatchToProps
    )(TodoInput);