import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is the purpose of this website?", answer: "This website is designed to let users create and share memes effortlessly." },
    { question: "Do I need to create an account?", answer: "No, this platform does not require any login or account creation. Just start creating memes right away!" },
    { question: "Is this an Open Source Project?", answer: "Yes! MemeX is fully open source. Feel free to explore the code and contribute!" },
    { question: "Is there any cost to use the app?", answer: "No, MemeX is completely free to use." },
    { question: "Can I use the app on my phone?", answer: "Yes, MemeX is fully responsive and works on all devices, including mobile." },
    { question: "How do I suggest a feature or report a bug?", answer: "You can contribute or open an issue on our GitHub repository." },
    { question: "Are my creations saved?", answer: "Currently, creations are not saved on the app. You can download your memes directly to your device." },
    { question: "Where can I find tutorials or guides?", answer: "Explore the Help section on our homepage for tips on creating memes." },
    { question: "Is my data secure?", answer: "Yes, MemeX does not collect or store any personal information." },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen mt-25">
      <div
        className="bg-neutral-900 p-6 rounded-lg text-white w-full md:w-[750px] lg:w-[1200px]"
        style={{
          marginLeft: "80px",
          borderRadius: "12px",
          fontFamily: "'Rowdies', cursive",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center p-4">Frequently Asked <span style={{color:"#007bff"}}> Questions</span></h2>
        <div className="accordion" id="accordionExample">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item bg-neutral-800 mb-3" style={{ borderRadius: "8px" }}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button flex justify-between items-center w-full p-4 text-left bg-neutral-800 text-white rounded-md focus:outline-none transition-all duration-300 ease-in-out"
                  onClick={() => toggleFaq(index)}
                  style={{ borderRadius: "8px" }}
                >
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-lg">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
              </h2>
              <div
                className={`accordion-collapse overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen p-4" : "max-h-0"
                } text-gray-300`}
              >
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
