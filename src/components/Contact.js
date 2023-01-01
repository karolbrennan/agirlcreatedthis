import React from "react"
 
function Contact(props) {
  return (
    <section>
      <div className="row justify-center">
        <div className="col s12 text-center p-xlg">
          <h2>Contact</h2>
          <p>Use the form below to email me!</p>
          <form name="contact" method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label>Name: <input type="text" name="name"/></label>
          <label>Email: <input type="email" name="email"/></label>
          <label>Message: <textarea name="message"></textarea></label>
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </section>
  )
}
 
export default Contact;
