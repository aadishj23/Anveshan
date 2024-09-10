import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess('');
    const { name, email, message } = formData;
    try {
      await axios({
        method: 'POST',
        url: 'https://anveshan.onrender.com/contact', 
        data: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccess('Your message has been successfully sent!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10 lg:mt-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Get in Touch
        </h2>
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input 
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            name="name"
            value={formData.name}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input 
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            onChange={handleChange}
            name="message"
            value={formData.message}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            required
          />
        </div>

        <button 
          type="submit" 
          className={`mt-6 w-full px-4 py-2 text-white rounded-lg flex items-center justify-center ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transition duration-200 ease-in-out'}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
      </form>
    </div>
  );
}

export default Contact;
