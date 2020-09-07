import React from "react"
 
function Contact(props) {
  return (
    <section>
      <div className="row justify-center">
        <div className="col s12 text-center p-xlg">
          <h2>Contact</h2>
          <p>Use the form below to email me, or you can find me on Twitter <a href="https://twitter.com/itskarolbrennan" target="_blank" rel="noopener noreferrer">@itskarolbrennan</a></p>
          <form name="contact" method="post" netlify>
          <p>
            <label>Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
      </div>
    </section>
  )
}
 
export default Contact;