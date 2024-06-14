import React from 'react'
import Navbar from '../components/Navbar';
import '../index.css';

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoStorefrontSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";

import img from '../assets/hero-img.png';
import img2 from '../assets/home-menu-img-1.png';
import img3 from '../assets/home-menu-img-2.png';
import img4 from '../assets/home-about-img-1.png';

const HomePage = () => {
  return (
    <>
    <Navbar />
    {/* Hero Section */}
    <div className="hero-section">
      <div className="swirl-bg"></div>    
      <div className="content mx-[3rem] w-[37rem] text-center" >
        <h1 className="text-5xl font-bold text-white/80 mt-[3rem] mb-12 text-outline-tertiary text-shadow">Welcome to Baked Bliss!</h1>
        <p className="text-xl text-gray-900">
          Discover the sweet taste of perfection in every bite.  
          From the comforting warmth of our breads to the delicate sweetness 
          of our pastries, we invite you to indulge in a journey of taste and tradition. 
        </p>
        <p className="text-xl text-gray-900 mt-8">
        Savor the warmth and flavor of our freshly baked treats, 
        and let us make your day a little brighter, one delicious bite at a time. <br/>
        <i>Baked with <b>Love</b>, Enjoyed with <b>Passion</b>.</i>
        </p>
        <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Baked Menu</button>
        <img src={img} alt="Hero Image Stacked Donuts" className='w-[19rem] h-auto ml-[42rem] mt-[-27rem]' />
        <img src={img} alt="Hero Image Stacked Donuts" className='w-[19rem] h-auto ml-[-22rem] mt-[-34rem]' />
      </div>
    </div>

    {/* Menu Section */}
    <div className="menu-section mt-[8rem]">
    <div className='w-[30rem] float-right  mr-[6rem]'>
    <h3 className="text-xl font-bold text-white mt-[3rem] mb-12 ">A wide range of baked goodies, for the sweet lovers</h3>
    <p className='text-white'>Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights.</p>
    <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Baked Menu</button>
    </div>
    
    <div className='container mt-[12rem] bg-gray-200 w-[18rem] h-auto rounded-lg shadow-md'>
    <img src={img3} alt="Raspberry Rose Lychee Croissant" className='w-[12rem] h-auto rounded-full mx-auto' />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-2 text-white">Raspberry Croissant</h4>
      <p className="text-white text-sm mb-4">Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.</p>
      <div className="flex justify-around items-center">
        <div className="icon-circle">
          <MdOutlineShoppingCart size={29} />
        </div>
        <div className="icon-circle">
          <FaRegHeart size={27} />
        </div>
      </div>
          </div>
    </div>

    <div className='container mt-[-15rem] ml-[11rem] bg-gray-200 w-[18rem] h-auto rounded-lg overflow-hidden shadow-md'>
    <img src={img2} alt="Hero Image Stacked Donuts" className='w-[12rem] h-auto rounded-full mx-auto' />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-2 text-white">Nutella French Crepes</h4>
      <p className="text-white text-sm mb-4">Delicately crafted with layers of thin crepes and filled with rich Nutella, its a delightful dessert you wll love to indulge in.</p>
      
      <div className="flex justify-around items-center">
        <div className="icon-circle">
          <MdOutlineShoppingCart size={29} />
        </div>
        <div className="icon-circle">
          <FaRegHeart size={27} />
        </div>
      </div>
      </div>
    </div>
  </div>

      {/* About Section */}
  <div className="about-section">
    <div className='text-container'>
      <h3 className="text-xl font-bold text-white mb-12 ">Learn more about our tight-knit family bakery</h3>
      <p className='text-white'>We are a family-owned bakery dedicated to bringing you the finest baked goods made from the highest quality ingredients. Our passion for baking is rooted in tradition, and we take pride in creating delicious treats that bring joy to our customers.</p>
      <p className='text-white mt-8'>From baking biscuits on a street corner to owning a local bakery, our story is born from immigrant parents who instilled in us a love for baking and a commitment to excellence. Every recipe we create reflects our heritage and the values we hold dear.</p>
      <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">About Us</button>
    </div>  
    <div className='image-container'>
      <img src={img4} alt="Hero Image Stacked Donuts" className='about-image mt-[-10rem] ml-[8rem]'/>
    </div>
  </div>

  {/* Contact Section */}
  <div className="contact-section">
    <div className='w-[30rem] float-right mr-[19rem]'>
    <h3 className="text-xl font-bold text-white mt-12 mb-12 ">A wide range of baked goodies, for the sweet lovers</h3>
    <p className='text-white'>Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights.</p>
    <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Contact Us</button>
    </div>

    <div className='container w-[28rem] h-auto float-left rounded-lg ml-[17rem] p-8'>
    <div className="flex flex-col items-center justify-center">
     <div className="max-w-md mx-auto space-y-4 text-center">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="icon-circle mr-4">
          <IoStorefrontSharp size={30} />
        </div>
        <div>
          <h3 className='font-bold text-lg mb-2 text-white'>In-Store Shopping</h3>
          <p className="text-gray-300">Visit our bakery and explore our delicious range of freshly baked goods.</p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="icon-circle mr-4">
          <TbTruckDelivery size={30} />
        </div>
        <div>
          <h3 className='font-bold text-lg mb-2 mt-4 text-white'>Delivery</h3>
          <p className="text-gray-300">Get your favorite treats delivered to your doorstep with our fast and reliable delivery service.</p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="icon-circle mr-4">
          <FaHandHoldingUsd size={30} />
        </div>
        <div>
          <h3 className='font-bold text-lg mb-2 mt-4 text-white'>Pre-Orders</h3>
          <p className="text-gray-300">Place your order in advance and pick it up hassle-free at your preferred time.</p>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
    </div>
  </>
  )
}

export default HomePage;
