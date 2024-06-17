import React from "react";
import Navbar from "../components/Navbar";

import img from "../assets/hero-img-3.png";

const Contact = () => {
  // A function to handle the form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Display an alert: Show the alert message in the submit handler.
    alert("Thank you! We will get back to you within 24 hours.");
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="swirl-bg"></div>
        <div className="content mx-[3rem] w-[50rem] text-center">
          <h1 className="text-5xl font-bold text-white/80 my-[3rem]  text-outline-tertiary text-shadow">
            Contact Us
          </h1>
          <div className="max-w-md mx-auto mt-[2rem] relative overflow-hidden z-10 p-8 rounded-lg before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 border-white border-b-1 border-r-2 shadow-white shadow-xl">
            <h3 className="text-xl text-white mb-8">
              Feel free to send us any feedback you have
            </h3>

            <form method="post" action="#" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-400 border rounded-md text-white"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="mb-8">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="mt-1 p-2 w-full bg-gray-400 border rounded-md text-white"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="bio"
                >
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 w-full bg-gray-500 rounded-md text-white"
                  rows="3"
                  name="message"
                  id="message"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[22rem] h-auto ml-[46rem] mt-[-34rem]"
          />
          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[23rem] h-auto ml-[-19rem] mt-[-41rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
