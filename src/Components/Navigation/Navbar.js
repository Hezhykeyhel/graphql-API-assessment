import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import { useContext } from "react";
import { themeContext } from "../../Context";
import graphql_light from "../../img/graphql_light.png";

const Navbar = ({ click }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav
      className="navbar"
      style={{ background: darkMode ? "var(--darkMode-dark)" : "" }}
    >
      <div className="navigation_logo">
        <img src={graphql_light} width={100} height={50} alt="" />
        <div>
          <Toggle />
        </div>
      </div>
      {/* {links} */}
      <ul className="navbar_links">
        <li>
          <Link
            to="items"
            className="nav_link"
            style={{ color: darkMode ? "#fff" : "" }}
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            Items
          </Link>
        </li>
      </ul>
      {/* {Hamburger-Menu} */}
      <div className="hamburger_menu" onClick={click}>
        <div style={{ background: darkMode ? "#fff" : "" }}></div>
        <div style={{ background: darkMode ? "#fff" : "" }}></div>
        <div style={{ background: darkMode ? "#fff" : "" }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
