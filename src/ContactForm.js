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
    // Add your form submission logic here
  };

  return (
    <div id="contact-form-container">
      <h2>like what you see? let's get in <span className="highlighted">touch</span>.</h2>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          {/* Add your form fields and submit button here */}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
