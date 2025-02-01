
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = 'Email address is invalid';
    if (!formData.subject) formErrors.subject = 'Subject is required'; // Validate subject
    if (!formData.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const subject = `Contact Us - ${formData.subject}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      const mailToLink = `mailto:kr19pravin@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailToLink; // Opens the user's default email client
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="bg-black pb-5 pt-5">
      <h2 className="text-center mb-4 text-white">Contact me</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="p-5 col-12 col-md-10 col-xl-6 contact rounded">
              {/* Name Input */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Name</label>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email Input */}
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Subject Input */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className={`form-control ${
                    errors.subject ? 'is-invalid' : ''
                  }`}
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <label htmlFor="subject">Subject</label>
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject}</div>
                )}
              </div>

              {/* Message Input */}
              <div className="form-floating mb-3">
                <textarea
                  className={`form-control ${
                    errors.message ? 'is-invalid' : ''
                  }`}
                  id="message"
                  rows="6"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="message">Message</label>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
