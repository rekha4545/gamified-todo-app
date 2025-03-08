import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="user-list">
      <h2>👥 Users</h2>
      {users.map((user) => (
        <p key={user.id}>👤 {user.name} - {user.designation}</p>
      ))}
    </div>
  );
};

export default UserList;
