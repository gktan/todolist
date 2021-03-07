import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/action';

const TodoList = ( props) => {
  console.log(props);
    return (
        <div>
            {props.todos.map((todo, index) => (
                <div className="todoList" key={index}>
                    {todo.task}
                    <button onClick={() => props.dispatch(deleteTodo(todo.id))}><i class="fas fa-trash"></i></button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos.data
    }
};

export default connect(mapStateToProps)(TodoList);