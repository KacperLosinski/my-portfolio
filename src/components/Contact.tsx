"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const ContactSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="contact-section py-20">
      <div className="contact-content max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Astronauta na mobilnych przeniesiony pod tekst */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-last md:order-none">
          <div className="max-w-[200px] md:max-w-[250px]">
            <Loader />
          </div>
        </div>

        {/* Tekst po lewej */}
        <div className="text-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-[1.3] md:leading-[1.4]">Have a project in mind?</h2>
          <p className="text-lg text-gray-300 mb-4">Let’s get to work.</p>
          <button className="say-hello-btn px-6 py-3 text-lg font-semibold flex items-center gap-2" onClick={() => setModalOpen(true)}>
            Say Hello
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

      </div>

      {/* Modal z formularzem */}
      {isModalOpen && (
  <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-50">
    <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg max-w-[450px] border-2 border-transparent bg-gradient-to-br from-[#201E43] to-[#201E43]">
      <button className="close-btn absolute top-2 right-4 text-gray-300 text-xl" onClick={() => setModalOpen(false)}>✖</button>
      
      {/* Formularz w obramówce */}
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message" rows={4} required></textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default ContactSection;
