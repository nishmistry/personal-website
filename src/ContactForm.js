import React from 'react';
import './App.css';

function ContactForm() {

  return (
    <div className="contact-container" id="contact-container">
      <h2 className="contact-header">contact</h2>
      <h2 className="contact-cta">like what you see? let's get in <span className="highlighted">touch</span>.</h2>
      <div id="contact-form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-field">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              name="message"
              placeholder="message"
              required
            />
          </div>
          <button type="submit" id="submit-button">Submit</button>
        </form>
      </div>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      {/* <div className="circle circle-3"></div> */}
    </div>
  );
}

export default ContactForm;
