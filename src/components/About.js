import React from "react"
import logo from "../assets/logo-white.svg";
 
function About(props) {
  return (
    <section className="accent-bg">
      <div className="row justify-center">
        <div className="col s12 text-center p-xlg">
          <img src={logo} alt="A Girl Created This" className="logo" />
          <p>Hi! My name is Karol Brennan, I've been building websites since I was a teenager.<br/> A Girl Created This was started as a place to share my passion projects.<br/> Check out what I've been working on!</p>
        </div>
      </div>
    </section>
  )
}
 
export default About;