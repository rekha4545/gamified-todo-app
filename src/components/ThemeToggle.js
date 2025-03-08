import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/actions"; 

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <button className="theme-toggle interactive-button" onClick={() => dispatch(toggleTheme())}>
      🌞 / 🌙 Toggle Theme
    </button>
  );
};

export default ThemeToggle;
