import React, { useState } from 'react';
import './ContactForm.css'; // We'll create this for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  {/* handle form submission by pushing to our google sheet*/}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const scriptURL = process.env.NEXT_PUBLIC_SCRIPT_URL; // Replace with your Web App URL
    if (!scriptURL) {
      alert("Script URL is not defined. Please check your environment variables.");
      return;
    }
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
        alert("Thank you for your message! Your response has been recorded.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          message: "",
        });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="intro-section">
        <h2>Ready to make your organization more VIP friendly?</h2>
        <h2>Looking for advice about practices or protocols?</h2>
        
        <p>Message me through this form, and someone will get back to you as soon as possible.</p>
        
        {/*temporary categories */}
        <div className="contact-options">
          <p><strong>Email:</strong> lizmyska@gmail.com</p>
          <p><strong>Schedule a Zoom Meeting</strong></p>
          <p><strong>See Calendar</strong></p>
        </div>
      </div>

      <div className="form-section">
        <h3>Contact Plan Consulting</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;