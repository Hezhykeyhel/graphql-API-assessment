import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Components//Navigation/Navbar";
import "./App.css";
import "./App.scss";
import Sidedrawer from "./Components/Sidedrawer/Sidedrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import { themeContext } from "./Context";
import { Puff } from "react-loader-spinner";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import DataFetch from "./Components/DataFetch/DataFetch";

const transition = { duration: 2, type: "spring" };

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {loading ? (
        <div className="spinner">
          <Puff
            size={100}
            width={100}
            height={100}
            color={"var(--orange)"}
            loading={loading}
          />
          <br />
          <br />
          <motion.div
            className="loading"
            initial={{ bottom: "20rem" }}
            whileInView={{ bottom: "38rem" }}
            transition={transition}
          >
            <h4 style={{ color: darkMode ? "var(--blueCard)" : "green" }}>
              <h2 style={{ color: darkMode ? "#fff" : "" }}>
                <span
                  className="typer"
                  style={{
                    color: darkMode ? "var(--orange)" : "var(--darkMode-dark)",
                  }}
                >
                  <Typewriter
                    cursor="|"
                    loop={2}
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1200}
                    words={["GraphQL Mock API"]}
                  />
                </span>
              </h2>
            </h4>
          </motion.div>
        </div>
      ) : (
        <div className="allStructures">
          <Navbar click={() => setSideToggle(true)} />
          <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          <DataFetch />
        </div>
      )}
    </div>
  );
}

export default App;
