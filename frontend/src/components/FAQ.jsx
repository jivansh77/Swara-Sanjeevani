import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };

  const faqData = [
    {
      question: "What is music therapy?",
      answer:
        "Music therapy is a therapeutic approach that uses the power of music to promote healing and improve well-being. It involves using different types of music to help individuals manage physical, emotional, cognitive, and social needs.",
    },
    {
      question: "How does Swara Sanjeevani personalize sessions?",
      answer:
        "Swara Sanjeevani personalizes sessions by identifying individual needs through a series of assessments, then matching those needs with specific ragas, frequencies, and breathing exercises designed to bring harmony and balance to the mind and body.",
    },
    {
      question: "Can music therapy help with stress and anxiety?",
      answer:
        "Yes, music therapy has been shown to reduce stress and anxiety levels by promoting relaxation, emotional expression, and mindfulness. It can create a soothing environment that helps in regulating emotional responses.",
    },
    {
      question: "Are there different types of music therapies available?",
      answer:
        "Yes, Swara Sanjeevani offers different forms of music therapy, including classical ragas, instrumental sessions, and personalized music sessions tailored to address specific mental and emotional needs.",
    },
    {
      question: "How do I get started with a personalized session?",
      answer:
        "You can get started by signing up on our website and filling out a quick questionnaire. Based on your responses, our team will create a custom music therapy plan tailored to your specific needs.",
    },
  ];

  return (
    <section id="faqs" className="bg-primary bg-opacity-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-primary bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3
                className="text-lg font-semibold text-accent cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;