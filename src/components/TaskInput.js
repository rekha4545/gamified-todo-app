import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions"; 

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      dispatch(addTask({ id: Date.now(), text: task, priority }));
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="✏️ New Task" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low ⚪</option>
        <option>Medium 🟡</option>
        <option>High 🔴</option>
      </select>
      <button className="interactive-button" onClick={handleAdd}>➕ Add Task</button>
    </div>
  );
};

export default TaskInput;
