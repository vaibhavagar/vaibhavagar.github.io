import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="cp-footer">
        <div className="cp-footer__inner">
          <div className="cp-footer__top">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/vaibhav-agarwal-ab17222b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/VaibhavAgarr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/vaibhavagarwall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="cp-footer__bottom">
            <span>Powered by Vaibhav Agarwal, site built in React</span>
          </div>
        </div>
        <svg
          class="cp-footer__divider"
          viewBox="0 0 1920 520"
          width="100%"
          preserveAspectRatio="none"
        >
          <path d="M1920,0,1262.91,426.4a556.46,556.46,0,0,1-605.82,0L0,0V520H1920Z"></path>
        </svg>
      </footer>
    );
  }
}

export default Footer;
