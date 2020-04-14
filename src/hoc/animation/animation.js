import React from "react";
import "./animation.scss";
// import imageOne from '../../images/1.png';
// import imageTwo from '../../images/2.png';
// import imageThree from '../../images/3.png';
// import imageFour from '../../images/4.png';
// import imageFive from '../../images/5.png';
// import imageSix from '../../images/6.png';
// import imageSeven from '../../images/7.png';
// import imageEight from '../../images/8.png';
// import imageNine from '../../images/9.png';
// import imageTen from '../../images/10.png';
// import imageEleven from '../../images/11.png';
// import imageTwelve from '../../images/12.png';

class Animation extends React.Component {
  render() {
    return (
      <div className="cp-animation">
        <div className="cp-animation__one"></div>
        <div className="cp-animation__two"></div>
        <div className="cp-animation__three"></div>
        <div className="cp-animation__four"></div>
        <div className="cp-animation__five"></div>
        <div className="cp-animation__six"></div>
        <div className="cp-animation__seven"></div>
        <div className="cp-animation__eight"></div>
        <div className="cp-animation__nine"></div>
        <div className="cp-animation__ten"></div>
        <div className="cp-animation__eleven"></div>
        <div className="cp-animation__twelve"></div>
        <div className="cp-animation__thirteen"></div>
        <div className="cp-animation__clouds cp-animation__clouds--one"></div>
        <div className="cp-animation__clouds cp-animation__clouds--two"></div>
      </div>
    );
  }
}

export default Animation;
