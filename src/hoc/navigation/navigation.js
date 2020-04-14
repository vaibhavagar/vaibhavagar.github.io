import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="cp-header__nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/seo">SEO</Link>
            </li>
            <li>
              <Link to="/themes">Themes</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
