import React from "react";
import Masthead from "../masthead/masthead";
// import mastheadImage from "../../images/blog-blocks-wallpaper-1591056.jpg";

class Blog extends React.Component {
  render() {
    return (
      <div className="cp-section__blog">
        <Masthead />
        <div className="cp-section__inner">
          <h1>Blog test</h1>
          <div className="cp-blog">
            <div className="cp-blog__section">
              <h3>How to build a website using Ultima Gaming?</h3>
              <span>By vaibhav</span>
              <p>What is Ultima gaming? Ultima Gaming is a professional Wordpress...</p>
              <a href="https://www.gamingwebsitethemes.com/how-to-build-a-website-using-ultima-gaming/" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
