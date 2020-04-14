import React from "react";
import "./about.scss";
import Masthead from "../masthead/masthead";
// import mastheadImage from "../../images/landscape-photography-of-rock-formation-near-highway-844167.jpg";

class About extends React.Component {
  render() {
    return (
      <section className="cp-section cp-section__about">
        <Masthead />
        <div className="cp-section__inner">
          <h1>About</h1>
          <p>
            I am a Web Developer with ~8 years of working knowledge with one of
            the finest Hospitality company. I have developed several responsive
            websites from scratch, that includes static websites/websites using
            a CMS. Have developed websites mainly in Wordpress, MODx. Also, have
            a working knowledge of Ecommerce websites using Opencart tool.
          </p>
          <h2>Roles & Responsibilities</h2>
          <ul>
            <li>
              Develop and maintain Hilton Worldwide websites as the primary
              responsibility, that is fully responsive and ADA compliant.
            </li>
            <li>
              Write effective code, that converts Design comps (PSD,AI, Sketch,
              Figma) into elegant and working websites
            </li>
            <li>
              Assist with unit test and debug microsites for effective results,
              as required
            </li>
            <li>
              Tracking all the bookings for each site using the internal booking
              system Adobe Analytics, Webtrends.
            </li>
            <li>
              Assisting with GTM (Google tag manager) to keep a track of
              analytics of each site, for site and events tracking
            </li>
            <li>
              Setting up and maintaining Cheetahmail forms for Email campaigns
              and newsletters.
            </li>
            <li>
              Effective use of GIT for version control and GULP as a task
              runner.
            </li>
            <li>
              Adhere to coding standards and procedures and participate in code
              reviews
            </li>
          </ul>
          <h2>Technical Skills</h2>
          <ul>
            <li>
              Recent study with handson - React, React Native, Gatsby JS,
              GraphQL
            </li>
            <li>
              Web Technologies : HTML5, CSS3, SASS, JQuery, AJAX, JSON,
              JavaScript ,GreenSock
            </li>
            <li>
              Backend Technologies : PHP Database Application : XAMPP, MAMP,
              Local By Flywheel
            </li>
            <li>Design : Adobe Photoshop, Illustrator, Sketch, Figma</li>
            <li>
              Content Management System : Modx Evo/Revo, WordPress, EZ Publish,
              Drupal
            </li>
            <li>Designing tools used : IDE Tools – Eclipse, Net Beans, UML</li>
            <li>
              Query Language known : SQL Software Development : Java, Algorithms
              and Data Structures
            </li>
            <li>GIT Version control : Babun (terminal), Sourcetree (UI)</li>
            <li>Task Runner : Gulp</li>
            <li>Ecommerce Platform : OpenCart, Wordpress</li>
            <li>Digital Accessibility</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default About;
