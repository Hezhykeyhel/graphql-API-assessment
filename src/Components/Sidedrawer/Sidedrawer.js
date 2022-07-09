import "./Sidedrawer.css";
import { themeContext } from "../../Context";
import React, { useContext } from "react";

const Sidedrawer = ({ show, click }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div
      className={sideDrawerClass.join(" ")}
      style={{
        background: darkMode
          ? "linear-gradient(180deg, var(--darkMode-black) 0%, var(--black) 100%)"
          : "",
      }}
    >
      <ul className="sidedrawer_links" onClick={click}>
        <li style={{ padding: "1rem" }}>
          <div
            to="items"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            style={{ color: darkMode ? "#fff" : "" }}
          >
            Test environment. Please click{" "}
            <span style={{ color: "var(--red)", fontWeight: "bolder" }}>
              HERE
            </span>{" "}
            to close
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidedrawer;
