import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ScrollAnimation from "react-animate-on-scroll";
import "../index.css";

// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa6";
import { IoStorefrontSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import "animate.css/animate.compat.css";

import img from "../assets/hero-img.png";
import img2 from "../assets/item-1.jpeg";
import img3 from "../assets/home-menu-img-2.jpeg";
import img4 from "../assets/home-about-img-1.png";
import img5 from "../assets/home-menu-img-3.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuButtonClick = () => {
    navigate("/menu");
  };

  const handleAboutButtonClick = () => {
    navigate("/about");
  };

  const handleContactButtonClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="swirl-bg"></div>
        <div className="content mx-[3rem] w-[37rem] text-center md:mx-auto md:w-[37rem]">
          <h1 className="text-5xl font-bold text-white/80 mt-[3rem] mb-12 text-outline-tertiary text-shadow">
            Welcome to Baked Bliss!
          </h1>
          <p className="text-xl text-white">
            Discover the sweet taste of perfection in every bite. From the
            comforting warmth of our breads to the delicate sweetness of our
            pastries, we invite you to indulge in a journey of taste and
            tradition.
          </p>
          <p className="text-xl text-white mt-8">
            Savor the warmth and flavor of our freshly baked treats, and let us
            make your day a little brighter, one delicious bite at a time.{" "}
          </p>
          <p className="text-xl text-white mt-8">
            Whether you are in the mood for a classic favorite or looking to try
            something new, our bakery offers a wide variety of goodies that
            promise to delight your taste buds and bring joy to your heart.
          </p>
          <p className="text-xl text-white mt-8">
            <i>
              Baked with <b>Love</b>, Enjoyed with <b>Passion</b>.
            </i>
          </p>
          <button
            className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg"
            onClick={handleMenuButtonClick}
          >
            Baked Menu
          </button>
          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[21rem] h-auto ml-[42rem] mt-[-35rem]"
          />
          <img
            src={img}
            alt="Hero Image Stacked Donuts"
            className="w-[20rem] h-auto ml-[-24rem] mt-[-34rem]"
          />
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section mt-[3rem]">
        <div className="w-[30rem] float-right  mr-[4rem]">
          <h3 className="text-xl font-bold text-white mb-8 mt-[-6rem]">
            A wide range of baked goodies, for the sweet lovers
          </h3>
          <p className="text-white">
            Explore our extensive menu filled with mouthwatering treats and
            savory delights. Explore our extensive menu filled with
            mouthwatering treats and savory delights. Explore our extensive menu
            filled with mouthwatering treats and savory delights.
          </p>
          <p className="text-white mt-8">
            Our menu features a variety of options to satisfy every craving,
            whether you are in the mood for a sweet indulgence or a savory
            snack. Each bite is a testament to our commitment to quality and
            taste, promising an unforgettable experience with every visit.
          </p>
          <p className="text-white mt-8">
            From morning pastries to afternoon desserts, and everything in
            between, our selection is designed to delight your senses and make
            every moment special. Come in and discover your new favorite treat
            today!
          </p>
          <button
            className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg"
            onClick={handleMenuButtonClick}
          >
            Baked Menu
          </button>
        </div>

        {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="container border mt-[16rem] ml-12 bg-gray-200 w-[18rem] h-auto rounded-lg overflow-hidden shadow-md">
          <img
            src={img3}
            alt="Raspberry Rose Lychee Croissant"
            className="w-[12rem] h-auto mx-auto mt-6 rounded-t-lg"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2 text-white">
              Raspberry Croissant
            </h4>
            <p className="text-white text-sm mb-4">
              This Raspberry Rose Lychee Croissant is filled with raspberry rose
              compote, a lychee glaze and freeze-dried raspberries.
            </p>
          </div>
        </div>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="container border mt-[-33rem] ml-[23rem] bg-gray-200 w-[18rem] h-auto rounded-lg overflow-hidden shadow-md">
          <img
            src={img5}
            alt="Hero Image Stacked Donuts"
            className="w-[12rem] h-auto mx-auto mt-6 rounded-t-lg"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2 text-white">
              Breakfast Croissant
            </h4>
            <p className="text-white text-sm mb-4">
              These Maple-Dijon Breakfast Croissant Sandwiches are filled with
              cheese, fried bacon, a fried egg and a 2 fried sausages.
            </p>
          </div>
        </div>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="container border mt-[-33rem] ml-[43rem] bg-gray-200 w-[18rem] h-auto rounded-lg overflow-hidden shadow-md">
          <img
            src={img2}
            alt="Hero Image Stacked Donuts"
            className="w-[12rem] h-[17rem] mx-auto mt-6 rounded-t-lg"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2 text-white">
              Red Velvet Waffles
            </h4>
            <p className="text-white text-sm mb-4">
              Delight in the art of breakfast with our Red Velvet Marble
              Waffles, a perfect blend of classic and red velvet batter.
            </p>
          </div>
        </div>
        {/* </ScrollAnimation> */}
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="text-container">
          <h3 className="text-xl font-bold text-white mb-12 ">
            Learn more about our tight-knit family bakery
          </h3>
          <p className="text-white">
            We are a family-owned bakery dedicated to bringing you the finest
            baked goods made from the highest quality ingredients. Our passion
            for baking is rooted in tradition, and we take pride in creating
            delicious treats that bring joy to our customers.
          </p>
          <p className="text-white mt-8">
            From baking biscuits on a street corner to owning a local bakery,
            our story is born from immigrant parents who instilled in us a love
            for baking and a commitment to excellence. Every recipe we create
            reflects our heritage and the values we hold dear.
          </p>
          <button
            className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg"
            onClick={handleAboutButtonClick}
          >
            About Us
          </button>
        </div>
        <div className="image-container">
          <img
            src={img4}
            alt="Hero Image Stacked Donuts"
            className="about-image mt-[-10rem] ml-[8rem]"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="w-[30rem] float-right mr-[19rem]">
          <h3 className="text-xl font-bold text-white mt-4 mb-12 ">
            Get in Touch with Us
          </h3>
          <p className="text-white">
            We would love to hear from you! Whether you have questions about our
            menu, need assistance with an order, or just want to share your
            feedback, our team is here to help. Reach out to us and let us make
            your experience with Baked Bliss even more delightful.
          </p>
          <p className="text-white mt-8">
            You can contact us via phone, email, or visit our store. We are
            dedicated to providing you with the best service and ensuring that
            all your needs are met. Your satisfaction is our priority.
          </p>
          <button
            className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg"
            onClick={handleContactButtonClick}
          >
            Contact Us
          </button>
        </div>

        <div className="container w-[28rem] h-auto float-left rounded-lg ml-[17rem] p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-md mx-auto space-y-4 text-center">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="icon-circle mr-4">
                    <IoStorefrontSharp size={30} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">
                      In-Store Shopping
                    </h3>
                    <p className="text-gray-300">
                      Visit our bakery and explore our delicious range of
                      freshly baked goods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="icon-circle mr-4">
                    <TbTruckDelivery size={30} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 mt-4 text-white">
                      Delivery
                    </h3>
                    <p className="text-gray-300">
                      Get your favorite treats delivered to your doorstep with
                      our fast and reliable delivery service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="icon-circle mr-4">
                    <FaHandHoldingUsd size={30} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 mt-4 text-white">
                      Pre-Orders
                    </h3>
                    <p className="text-gray-300">
                      Place your order in advance and pick it up hassle-free at
                      your preferred time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
