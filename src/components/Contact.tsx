"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import SuccessPopup from "./SuccessPopup";

const ContactSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: !/\S+@\S+\.\S+/.test(formData.email)
        ? "Valid email required"
        : "",
      subject: formData.subject.trim() === "" ? "Subject is required" : "",
      message: formData.message.trim() === "" ? "Message cannot be empty" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) return;

    fetch("https://formspree.io/f/mgvalvgq", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setIsSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setIsSent(false), 4000);
        }
      })
      .catch((err) => {
        console.error("Form error:", err);
      });
  };

  return (
    <section className="contact-section py-20">
      <div className="contact-content max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-last md:order-none">
          <div className="max-w-[200px] md:max-w-[250px]">
            <Loader />
          </div>
        </div>

        <div className="text-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-[1.3] md:leading-[1.4]">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-300 mb-4">Let’s get to work.</p>
          <button
            className="say-hello-btn px-6 py-3 text-lg font-semibold flex items-center gap-2"
            onClick={() => setModalOpen(true)}
          >
            Say Hello
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg max-w-[450px] border-2 border-transparent bg-gradient-to-br from-[#201E43] to-[#201E43]">
            <button
              className="close-btn absolute top-2 right-4 text-gray-300 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ✖
            </button>

            <div className="form-container">
              {isSent && (
                <SuccessPopup message="Message sent successfully!" />
              )}

              <form
                className="form"
                action="https://formspree.io/f/mgvalvgq"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
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
