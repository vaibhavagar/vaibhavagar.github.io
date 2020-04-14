import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchNav from "./hoc/switchNav/switchNav";
import Header from "./hoc/header/header";
import Footer from "./hoc/footer/footer";

class Portfolio extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Router>
          <Header />
          <div className="main" role="main">
            <SwitchNav />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById("root"));
