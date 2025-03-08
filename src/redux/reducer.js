import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, TOGGLE_THEME, ADD_USER } from "./actions";

const initialState = {
  theme: "light",
  tasks: [],
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK: // ✅ Fixing Delete Task Issue
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: true, timeCompleted: new Date() } : task
        ),
      };
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;
