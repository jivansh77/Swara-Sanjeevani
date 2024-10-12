import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="testimonials" className="bg-primary bg-opacity-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Testimonials</h2>
        <Slider {...settings}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Swara Sanjeevani has transformed my approach to stress management. The music therapy sessions are incredibly effective."</p>
            <p className="text-accent font-semibold">- A Happy Client</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"The personalized ragas and breathing exercises have significantly improved my focus and overall well-being."</p>
            <p className="text-accent font-semibold">- Another Satisfied User</p>
          </div>
          {/* Additional Testimonials */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"I feel a deeper sense of peace after using Swara Sanjeevani. It has helped me reconnect with myself."</p>
            <p className="text-accent font-semibold">- Grateful Client</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"This has been a life-changing experience for me. I recommend it to anyone dealing with stress."</p>
            <p className="text-accent font-semibold">- Wellness Enthusiast</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"The calming effects of the music therapy sessions have greatly reduced my anxiety levels."</p>
            <p className="text-accent font-semibold">- Relieved User</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;