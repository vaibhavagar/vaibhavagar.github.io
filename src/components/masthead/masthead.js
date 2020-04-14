import React from "react";

const Masthead = (props) => {
  return (
    <section className="cp-masthead">
      {props.mastheadImage ? <img src={props.mastheadImage} alt="" /> : null}
      {props.overlayText ? (
        <div className="cp-masthead__overlay">
          <span aria-label={props.overlayText}>
            <span>React</span>
            <span>MODx</span>
            <span>Wordpress</span>
            <span class="l-pin"></span>
          </span>
          {/* <img src={props.overlayImage} alt="" /> */}
        </div>
      ) : null}
    </section>
  );
};

export default Masthead;
