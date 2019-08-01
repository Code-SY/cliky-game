import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="nav ">
    <div>Clicky Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="pipe">|</span> High Score:{" "}
      {props.highScore}
    </div>
  </div>
);

export default Nav;
