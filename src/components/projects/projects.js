import React from "react";
import projects from "./data.json";

class Projects extends React.Component {
  render() {
    return (
      <section className="cp-projects">
        <h2>Projects</h2>
        <p>Worked on individually while employeed with Hilton Worldwide</p>
        <div className="cp-projects__inner cp-projects__flex">
          {projects.projectData.map((item, index) => {
            return (
              <div
                className="cp-projects__name"
                key={index}
                data-cms={item.cms}
              >
                <div>
                  <h3>{item.title}</h3>
                  <span className="l-launch">{item.launch}</span>
                </div>
                <div>
                  <span class="l-pin"></span>
                  <p>{item.content}</p>
                  <span class="cp-button">
                    <span class="cp-button__ctaBorder"></span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cp-button__link"
                    >
                      View project
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
