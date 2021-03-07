const initState = {
    data: [],
};

const todos = (state = initState, action) => {
      switch (action.type) {
        case "ADD_TODO":
          return {
            ...state,
            data: [
              ...state.data,
              {
                id: Math.random(),
                task: action.payload,
              },
            ],
          };
        case "DELETE_TODO":
          const todos = state.data.filter((todo) => todo.id !== action.payload
          );
          return {
            ...state,
            data: todos
          };
        default:
          return state;
      }
  };

 export default todos;