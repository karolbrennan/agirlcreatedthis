import React from "react"
import logo from '../assets/logo.svg';
 
function Header(props) {
  return (
    <header>
      <div className="row justify-center">
        <div className="col s12 text-center p-xlg">
          <img className="logo" src={logo} alt="A Girl Created This" />
        </div>
      </div>
    </header>
  )
}
 
export default Header;