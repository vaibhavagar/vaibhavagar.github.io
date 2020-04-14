import React from "react";
import Navigation from "../navigation/navigation";
import logo from "./logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="cp-header">
        <div className="cp-header__logo">
          <img src={logo} alt="" />
        </div>
        <Navigation />
      </header>
    );
  }
}

export default Header;
