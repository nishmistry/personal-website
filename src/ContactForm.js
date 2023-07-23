import React, { useState } from 'react';
import './App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container" id="contact-container">
      <h2 className="contact-header">contact</h2>
      <h2 className="contact-cta">like what you see? let's get in <span className="highlighted">touch</span>.</h2>
      <div id="contact-form-container">
        <form onSubmit={handleSubmit} name="contact" netlify>
          <div className="form-field">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" id="submit-button">Submit</button>
        </form>
      </div>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
}

export default ContactForm;
