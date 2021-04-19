import React from "react";
import Masthead from "../masthead/masthead";
import Projects from "../projects/projects";
// import mastheadImage from "../../images/background.jpg";
//import vaibhav from "../../images/vai.png";
// import Animation from "../../hoc/animation/animation";
import { Link } from "react-router-dom";
import Contact from "../contact/contact";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Animation /> */}

        <Masthead
          // mastheadImage={mastheadImage}
          //overlayImage={vaibhav}
          overlayText={"Wordpress/MODx/Static/React"}
        />

        <div className="cp-homepageAbout">
          <p>
            Hola, I'm <span>Vaibhav Agarwal</span>. Passionate Web Developer
            working majorly on Front-end technologies.
            <Link to="/about" class="cp-button__link">
              <span className="l-line"></span>
              <span className="l-copy">More Info</span>
            </Link>
          </p>
        </div>

        <Projects />

        <Contact />
      </div>
    );
  }
}

export default Home;
