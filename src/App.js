import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, completeTask, toggleTheme, addUser } from "./redux/actions";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const { theme, tasks, users } = useSelector((state) => state);
  
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  // Add User
  const handleAddUser = () => {
    if (userName && designation) {
      dispatch(addUser({ id: Date.now(), name: userName, designation }));
      setUserName("");
      setDesignation("");
    }
  };

  // Add Task
  const handleAddTask = () => {
    if (taskText && selectedUser) {
      dispatch(addTask({
        id: Date.now(),
        text: taskText,
        priority,
        assignedTo: selectedUser,
        timeAdded: new Date(),
        completed: false,
        timeCompleted: null
      }));
      setTaskText("");
      setSelectedUser("");
    }
  };

  // Complete Task
  const handleCompleteTask = (taskId) => {
    dispatch(completeTask(taskId));
  };

  // **Delete Task**
  const handleDeleteTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  // Find User with Fastest Completion Time
  const fastestUser = tasks
    .filter(task => task.completed)
    .sort((a, b) => (a.timeCompleted - a.timeAdded) - (b.timeCompleted - b.timeAdded))[0]?.assignedTo;

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <h1>🚀 Gamified To-Do App</h1>
      <button className="toggle-btn" onClick={() => dispatch(toggleTheme())}>
        🌞 / 🌙 Toggle Theme
      </button>

      {/* Display Current Date & Time */}
      <h3>🕒 {new Date().toLocaleString()}</h3>

      {/* User Section */}
      <h2>👥 Add Users</h2>
      <div className="user-input">
        <input
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="textbox"
        />
        <input
          type="text"
          placeholder="Enter Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="textbox"
        />
        <button className="btn" onClick={handleAddUser}>➕ Add User</button>
      </div>

      {/* Task Section */}
      <h2>📝 Add Task</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="textbox"
        />
        <select className="textbox" onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select className="textbox" onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>{user.name} ({user.designation})</option>
          ))}
        </select>
        <button className="btn" onClick={handleAddTask}>➕ Add Task</button>
      </div>

      {/* Display Users */}
      <h2>👥 Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.designation}</li>
        ))}
      </ul>

      {/* Display Tasks */}
      <h2>📋 Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - {task.priority} | Assigned to: {task.assignedTo}
            {task.completed ? (
              <span> ✅ Completed in {((task.timeCompleted - task.timeAdded) / 1000).toFixed(2)} sec</span>
            ) : (
              <button className="btn" onClick={() => handleCompleteTask(task.id)}>✔ Complete</button>
            )}
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>

      {/* Fastest Task Completion */}
      {fastestUser && <h2>🎉 Congrats {fastestUser}! You completed the task fastest! 🎉</h2>}
    </div>
  );
};

export default App;
