import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div
      className="toggle"
      onClick={handleClick}
      style={{ background: darkMode ? "#F5F5F5" : "" }}
    >
      <Moon style={darkMode ? { color: "#000" } : { color: "#000" }} />
      <Sun style={{ color: darkMode ? "orange" : "" }} />
      <div
        className="toggle_button"
        style={
          darkMode
            ? {
                left: "5px",
                boxShadow: "0px 0px 2px 4px rgba(0,0,0,0.4)",
                background: "rgba(0,0,0,0.9)",
              }
            : { right: "5px" }
        }
      ></div>
    </div>
  );
};

export default Toggle;
