import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="table-container desktop">
          <h1>Skills</h1>

          <table>
            <tbody>
              <tr>
                <td>
                  <h2>
                    Front-End 
                  </h2>
                  <p>
                  HTML • CSS • JavaScript (including ES6) • ReactJS • VueJS • Gatsby • <br></br>jQuery • Handlebars • Bootstrap and other CSS frameworks
                  </p>
                </td>
                <td>
                  <h2>
                    Design <i className="fas fa-paint-brush"></i>
                  </h2>
                  <p>
                  • GoDaddy • Wordpress • UI/UX heuristics and principles •
                    Mobile-<br></br>Responsiveness • Adobe Illustrator • Adobe Photoshop
  
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>
                    Back-End
                  </h2>
                  <p>
                    SQL (MySQL) • NoSQL (MongoDB) • Node.js • Express.js •
                    Mongoose
                  </p>
                </td>

                <td>
                  <h2>
                    Soft Skills
                  </h2>
                  Highly organized, methodical and thorough. • Proactive, creative, out of the box <br></br>and original thinking in problem solving • High attention to detail.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Skills;

