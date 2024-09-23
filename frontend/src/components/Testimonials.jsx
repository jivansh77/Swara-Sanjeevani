// frontend/src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary bg-opacity-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Testimonials</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Swara Sanjeevani has transformed my approach to stress management. The music therapy sessions are incredibly effective."</p>
            <p className="text-accent font-semibold">- A Happy Client</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"The personalized ragas and breathing exercises have significantly improved my focus and overall well-being."</p>
            <p className="text-accent font-semibold">- Another Satisfied User</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
