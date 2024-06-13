import React from 'react'
import Navbar from '../components/Navbar';
import '../index.css';

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

import img from '../assets/hero-img.png';
import img2 from '../assets/home-menu-img-1.png';
import img3 from '../assets/home-menu-img-2.png';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="hero-section">
      <div className="swirl-bg"></div>

      {/* Hero Section */}
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
    <div className="menu-section mt-[15rem]">
    <div className='w-[30rem] float-right  mr-[4rem]'>
    <h3 className="text-xl font-bold text-black/90 mt-[3rem] mb-12 ">A wide range of baked goodies, for the sweet lovers</h3>
    <p>Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights. Explore our extensive menu filled with mouthwatering treats and savory delights.</p>
    </div>
    
    <div className='container mt-[12rem] bg-gray-200 w-[23rem] h-auto rounded-lg shadow-md'>
    <img src={img3} alt="Raspberry Rose Lychee Croissant" className='w-[12rem] h-auto rounded-full mx-auto' />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-2">Raspberry Croissant</h4>
      <p className="text-gray-700 text-sm mb-4">Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.</p>
      <MdOutlineShoppingCart size={30} />
      <FaRegHeart size={27}/>
      {/* <div className="flex justify-between items-center">
          </div> */}
          </div>
    </div>

    <div className='container mt-[-15rem] ml-[7rem] bg-gray-200 w-[23rem] h-auto rounded-lg overflow-hidden shadow-md'>
    <img src={img2} alt="Hero Image Stacked Donuts" className='w-[12rem] h-auto rounded-full mx-auto' />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-2">Nutella French Crepes</h4>
      <p className="text-gray-700 text-sm mb-4">Delicately crafted with layers of thin crepes and filled with rich Nutella, its a delightful dessert you wll love to indulge in.</p>
      <MdOutlineShoppingCart size={30} />
      <FaRegHeart size={27}/>
      {/* <div className="flex justify-between items-center">
          </div> */}
          </div>
    </div>
    </div>
    </>
  )
}

export default HomePage;
