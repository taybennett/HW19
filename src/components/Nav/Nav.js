import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li id="rw">{props.rightWrong}</li>
      <div>
      <li id="cur-sco">Your Score: {props.score}</li>
      </div>
      <li id="top-sco">High Score: {props.topScore}</li>
      <div>
      <li id="title">Click one, but not twice!</li>
      </div>
    </ul>
  </nav>
);

export default Nav;