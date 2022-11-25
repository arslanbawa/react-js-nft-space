import React from "react";
import logo from "../assets/images/Logo.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import styles from "./styles.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>NTF SPACE</p>
      </div>
      <div className="headerLinks">
        <ul>
          <li>discover</li>
          <li>royalty</li>
          <li>create</li>
        </ul>
      </div>
      <div className="headerRightLinks">
        <ul>
          <li className="loginLink">login</li>
          <li>
            <button>CREATE ACCOUNT</button>{" "}
          </li>
          <li className="mode"><  DarkModeOutlinedIcon /></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
