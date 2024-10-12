import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-8 text-center lg:text-left text-accent">About Us</h2>
          <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left text-secondary">Harmonizing Mind and Soul Through Music Therapy</h3>
          <p className="text-center lg:text-left text-gray-700 max-w-2xl mx-auto lg:mx-0">
            In recent years, the generality of mental health issues such as depression and anxiety have surged among people worldwide.<br></br><br></br>
            We strive to harness the power of love, the therapeutic essence of music, to provide culturally rich musical therapies by implementing Rhythmic Auditory Stimulation.<br></br><br></br>
            We aim to support emotional and neurological recovery and improve overall mental well-being by integrating Hindustani classical music into modern therapeutic practices.
          </p>
        </div>
        
        <div className="lg:w-1/2 lg:pl-10">
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:572/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FMeyps%2FMAGOmKMeyps%2F1%2Fp.png/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAP8hSYq35H1AblJbe3ThAYWgHYx9kxt-AbZNcTMgUa2-&exp=1728780332&osig=AAAAAAAAAAAAAAAAAAAAAK3w9B4wxmCBcG7F8l8-EcEQeQ8L5Vm5k7vYtqGJmKnC&signer=media-rpc&x-canva-quality=screen" 
            alt="Music Therapy" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;