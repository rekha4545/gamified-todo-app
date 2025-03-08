import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTask, removeTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item priority-${task.priority.toLowerCase()}`}>
          {task.text} ({task.priority})
          <button className="interactive-button complete" onClick={() => dispatch(completeTask(task))}>✅ Complete</button>
          <button className="interactive-button delete" onClick={() => dispatch(removeTask(task.id))}>❌ Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
