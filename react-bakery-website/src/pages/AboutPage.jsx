import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

import img from "../assets/hero-img-2.png";
import img2 from "../assets/about-img-1.jpeg";
import img3 from "../assets/about-img-2.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="swirl-bg"></div>
        <div className="content mx-[3rem] w-[50rem] text-center">
          <h1 className="text-5xl font-bold text-white/80 mt-[3rem] mb-12 text-outline-tertiary text-shadow">
            About Baked Bliss!
          </h1>
          <p className="text-xl text-white">
            We are a family-owned bakery dedicated to bringing you the finest
            baked goods made from the highest quality ingredients. Our passion
            for baking is rooted in tradition, and we take pride in creating
            delicious treats that bring joy to our customers.
          </p>
          <p className=" text-xl text-white mt-4">
            From baking biscuits on a street corner to owning a local bakery,
            our story is born from immigrant parents who instilled in us a love
            for baking and a commitment to excellence. Every recipe we create
            reflects our heritage and the values we hold dear.
          </p>
          <p className="text-xl text-white mt-8">
            At Baked Bliss, we believe in the power of community and the joy
            that comes from sharing freshly baked goods with friends and family.
            Our team of skilled bakers and friendly staff are dedicated to
            ensuring that every visit to our bakery is a delightful experience.
          </p>
          <p className="text-xl text-white mt-8">
            <i>
              Baked with <b>Love</b>, Enjoyed with <b>Passion</b>.
            </i>
          </p>
          <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">
            Baked Menu
          </button>
          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[20rem] h-auto ml-[52rem] mt-[-33rem]"
          />
          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[20rem] h-auto ml-[-22rem] mt-[-33rem]"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <div className="text-container">
          <h3 className="text-5xl font-bold text-white mt-[12rem] mb-12 text-outline-tertiary text-shadow">
            About Us
          </h3>
          <p className="text-white">
            Baked Bliss is not just a profession, but a cherished family
            tradition passed down through generations. We are a family-owned
            bakery dedicated to bringing you the finest baked goods made from
            the highest quality ingredients. Our passion for baking is deeply
            rooted in our heritage, and we take pride in creating delicious
            treats that bring joy to our customers.
          </p>
          <p className="text-white mt-8">
            Our story begins decades ago with my grandfather, who started baking
            in a small village. He perfected his craft, making everything from
            bread to pastries with love and care. This passion was passed down
            to my father, who continued the tradition, teaching me the secrets
            of the trade as we baked together in our family kitchen. The image
            you see is a treasured moment of me baking with my dad, a testament
            to the love and knowledge handed down to me.
          </p>
          <p className="text-white mt-8">
            Every recipe we create at Baked Bliss reflects our heritage and the
            values we hold dear. We believe in using the highest quality
            ingredients, traditional methods, and a touch of innovation to bring
            you baked goods that are both nostalgic and delightfully fresh.
            Whether you are savoring our classic pastries, artisan breads, or
            delectable cookies, you are tasting a piece of our family history
            and dedication.
          </p>
          <p className="text-white mt-8">
            Thank you for being a part of our journey. We invite you to
            experience the warmth and love that goes into every bake at Baked
            Bliss. From our family to yours, we hope our baked goods bring a
            little bit of bliss to your day.
          </p>
        </div>
        <div className="image-container">
          <img
            src={img2}
            alt="Hero Image Stacked Donuts"
            className="w-[30rem] h-auto mt-[16rem] ml-[11rem]"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mission-section">
        <div className="image-container">
          <img
            src={img3}
            alt="Hero Image Stacked Donuts"
            className="w-[30rem] h-auto mt-[5rem] ml-[14rem]"
          />
        </div>
        <div className="text-container2 ml-[10rem]">
          <h3 className="text-5xl font-bold text-white mt-[4rem] text-outline-tertiary text-shadow">
            Our Mission
          </h3>
          <p className="text-white">
            At Baked Bliss, our mission is to spread joy, create memorable
            experiences and give back to our community through our exceptional
            baked goods. We believe in the power of tradition, the importance of
            unity, and the happiness that a simple treat can bring.
          </p>
          <p className="text-white mt-8">
            We are committed to using only the finest ingredients and
            time-honored baking techniques to craft products that are both
            delicious and wholesome. Our aim is to not only satisfy your taste
            buds but also to evoke a sense of nostalgia and comfort with every
            bite.
          </p>
          <p className="text-white mt-8 mb-20">
            As a family-owned bakery, we take pride in our heritage and strive
            to uphold the values of dedication, excellence, and community. We
            invite you to share in our passion for baking and experience the
            warmth and love that goes into every creation at Baked Bliss.
            Together, let us make every day a little sweeter.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
