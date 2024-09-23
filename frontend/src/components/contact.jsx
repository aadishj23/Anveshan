import React, { useState } from 'react';
import axios from 'axios';
import contact_img from '../assets/contact/contact.png'
import contact_bg from '../assets/bg.svg'
import contact_rectangle from '../assets/contact/contact_rectangle.png'

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const handleContact = async () => {
    try {
      await axios({
        url: 'https://anveshan.onrender.com/',
        method: 'GET',
      });
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Contacted the backend');
    }
  };

  React.useEffect(() => {
    handleContact();
  }, []);

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
      setSuccess('Your message has been successfully sent! Anveshan team will get back to you soon.');
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
    <div className='min-h-screen w-full bg-cover bg-center ' style={{ backgroundImage: `url(${contact_bg})` }}>
      <div className="p-6 shadow-md rounded-lg flex justify-around pt-32">
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 px-10 py-10 md:px-20 md:py-20 w-screen md:w-full lg:w-2/5"
          style={{backgroundImage: `url(${contact_rectangle})`}}
        >
          <h2 className="mb-6 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-4xl font-bold">
            GET IN TOUCH
          </h2>
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input 
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              className="mt-1 p-3 border text-white border-gray-300 rounded-lg bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input 
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="mt-1 p-3 border text-white border-gray-300 rounded-lg bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              onChange={handleChange}
              name="message"
              value={formData.message}
              className="mt-1 p-3 border text-white border-gray-300 rounded-lg bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
              required
            />
          </div>

          <button 
            type="submit" 
            className={`mt-6 w-full px-4 py-2 text-white rounded-lg flex items-center justify-center ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 transition duration-200 ease-in-out'}`}
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
        <img src={contact_img} alt="conatact_photo" className='invisible md:visible w-0 md:w-max' />
      </div>
    </div>
  );
}

export default Contact;
