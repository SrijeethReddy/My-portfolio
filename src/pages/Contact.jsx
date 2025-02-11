import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/meoelqba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Title */}
      <div className="contact-header">
        <h1 className="contact-heading gradient-text">Let's Connect!</h1>
        <p className="contact-subheading">
          Whether you have a project in mind, a question, or just want to say hi...
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-content">
        {/* Contact Details */}
        <motion.div
          className="contact-details"
          whileHover={{ y: -5 }}
        >
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <p>Email</p>
                <a href="mailto:srijeethk20@gmail.com">srijeethk20@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <p>Phone</p>
                <a href="tel:4793522433">+1 (479) 352-2433</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>Location</p>
                <p>Dallas, Texas, USA</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          whileHover={{ y: -5 }}
        >
          <h2>Send Me a Message</h2>
          {submitted ? (
            <div className="form-success">
              <p>Thank you! Your message has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <h2>Find Me Online</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/srijeeth-k-152515146/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SrijeethReddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="map-container">
        <h2>My Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.6001375715!2d-96.87178999999999!3d32.820586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1712345678901"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default Contact;