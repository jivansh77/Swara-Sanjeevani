import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Contact Form */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
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

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-10 flex flex-col justify-center items-center lg:mt-20 text-center">
          <p className="text-center lg:text-left text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Whether you have questions, need more information, or simply want to connect, we’re here for you! 
            Feel free to reach out to us for inquiries about our personalized music therapy sessions, 
            recommendations for managing stress, or any other support we can offer. Your well-being is our priority.
          </p>
          <p className="text-center lg:text-left text-gray-700 max-w-2xl mx-auto lg:mx-0 mt-4">
            We understand that finding the right therapist is essential. Click the button below to find therapists 
            near you and begin your journey towards mental peace and balance.
          </p>
          <Link to="/therapists">
            <button className="bg-accent text-primary py-3 px-6 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300 mt-10">
              Find Therapists
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;