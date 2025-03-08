import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, SET_QUOTE, TOGGLE_THEME, ADD_USER } from "./actions";

const initialState = {
  tasks: [],
  users: [],
  theme: "light",
  xp: 0,
  level: 1,
  quote: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case COMPLETE_TASK:
      const xpGain = action.payload.priority === "High" ? 50 : action.payload.priority === "Medium" ? 30 : 10;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        xp: state.xp + xpGain,
        level: Math.floor((state.xp + xpGain) / 100) + 1,
      };
    case SET_QUOTE:
      return { ...state, quote: action.payload };
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;
