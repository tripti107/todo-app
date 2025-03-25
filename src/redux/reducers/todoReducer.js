const initialState = {
    tasks: [],
    loading: false,
    error: null
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK_START':
        return { ...state, loading: true };
      case 'ADD_TASK_SUCCESS':
        return {
          ...state,
          loading: false,
          tasks: [...state.tasks, action.payload]
        };
      case 'ADD_TASK_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case 'UPDATE_WEATHER':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.taskId
              ? { ...task, weather: action.payload.weather }
              : task
          )
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;