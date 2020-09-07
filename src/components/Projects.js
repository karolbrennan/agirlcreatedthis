import React from "react"
import bingoLogo from "../assets/logo_letsplaybingo.png";
import bingo from "../assets/web_letsplaybingo.png";
 
const projects = [
  {name: "Let's Play Bingo", logo: bingoLogo, image: bingo, 
    url: "https://www.letsplaybingo.io",
    github: "https://github.com/karolbrennan/letsplaybingo",
    description: "Growing up I would play bingo with my mother and grandmother, both in the traditional bingo halls and at home. At home we would use a small electroic caller that was often too quiet for my grandmother or simply unreliable. I created this site to help people host their own bingo games at home. The site gained momentum and now receives over 30k visitors every month."}
]
function Projects(props) {
  return (
    <section className="white-bg">
      <div className="row justify-center">
        <div className="col s12 text-center p-xlg">
          <h2>Projects</h2>
          {projects.map(project => {
            return (
              <div className='project'>
                <div className="row">
                  <div className="col s12 m2">
                    <img className="logo m-right-lg" src={project.logo} alt={project.name} />
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                  <div className="col s12 m6 text-left p-sides-xlg">
                    {/* <h4>{project.name}</h4> */}
                    <p className="description">{project.description}</p>
                  </div>
                  <div className="col s12 m4">
                    <img className="project-image" src={project.image} alt={project.name} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
 
export default Projects;