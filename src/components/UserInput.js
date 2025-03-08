import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const UserInput = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (name && designation) {
      dispatch(addUser({ id: Date.now(), name, designation }));
      setName("");
      setDesignation("");
    }
  };

  return (
    <div className="user-input">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="👤 Name" />
      <input value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="🏢 Designation" />
      <button className="interactive-button" onClick={handleAddUser}>➕ Add User</button>
    </div>
  );
};

export default UserInput;
