import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks);
  const data = [
    { name: "High Priority", value: tasks.filter((t) => t.priority === "High").length },
    { name: "Medium Priority", value: tasks.filter((t) => t.priority === "Medium").length },
    { name: "Low Priority", value: tasks.filter((t) => t.priority === "Low").length },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TaskChart;
