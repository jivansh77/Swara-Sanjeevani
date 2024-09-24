// frontend/src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-accent">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message:</label>
            <textarea
              name="message"
              rows="5"
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
