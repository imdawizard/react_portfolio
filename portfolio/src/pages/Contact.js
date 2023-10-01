import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  // State for form fields and error messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    // If there are errors, set them in the state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    
    toast.success('Form submitted successfully', {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Function to validate email address format
  const isValidEmail = (email) => {
    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the error message when the user starts typing
    setFormErrors({ ...formErrors, [name]: '' });

    // Update form data
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`input-field ${formErrors.name ? 'error' : ''}`}
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && (
            <span className="error-message">{formErrors.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`input-field ${formErrors.email ? 'error' : ''}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="input-field"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {/* Contact information */}
      <p className="contact-info">
        Or contact me by phone at <a href="tel:+13852868524">(385) 286-8524 </a> or by email at{' '}
        <a href="mailto:nate.work.kester@gmail.com">nate.work.kester@gmail.com</a>.
      </p>

    </section>
  );
}

export default Contact;