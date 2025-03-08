import React from "react";
import { useSelector } from "react-redux";

const XPBar = () => {
  const { xp, level } = useSelector((state) => state);
  return <p className="xp-bar">🎮 Level {level} - XP: {xp}</p>;
};

export default XPBar;
