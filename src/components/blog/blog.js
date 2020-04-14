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
          <p>First blog will be posted soon, this is still WIP!</p>
        </div>
      </div>
    );
  }
}

export default Blog;
