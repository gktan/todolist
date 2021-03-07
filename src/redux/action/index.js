const ADD_TODO = "ADD_TODO";
export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

