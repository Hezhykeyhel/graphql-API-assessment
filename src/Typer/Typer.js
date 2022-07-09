import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { themeContext } from "../Context";
import "./Typer.css";

const Typer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <h2 style={{ color: darkMode ? "#fff" : "" }}>
        I'm &nbsp;
        <span
          style={{ color: darkMode ? "var(--orange)" : "var(--darkMode-dark)" }}
        >
          <Typewriter
            loop
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
            words={["a Frontend Software Engineer"]}
          />
        </span>
      </h2>
    </div>
  );
};

export default Typer;
