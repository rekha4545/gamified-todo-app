export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK"; // ✅ Ensure removeTask is available
export const COMPLETE_TASK = "COMPLETE_TASK";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const ADD_USER = "ADD_USER";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id }); // ✅ Fix Delete Task
export const completeTask = (id) => ({ type: COMPLETE_TASK, payload: id });
export const toggleTheme = () => ({ type: TOGGLE_THEME });
export const addUser = (user) => ({ type: ADD_USER, payload: user });
