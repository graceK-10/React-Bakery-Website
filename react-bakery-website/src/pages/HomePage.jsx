import React from 'react'
import Navbar from '../components/Navbar';
import '../index.css';

import img from '../assets/hero-img.png';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="hero-section">
      <div className="swirl-bg"></div>
      <div className="content mx-[7rem]">
        <h1 className="text-5xl font-bold text-white/80 mt-[3rem] mb-12 text-outline-tertiary text-shadow">Welcome to Baked Bliss!</h1>
        <p className="text-xl text-gray-900">
          Discover the sweet taste of perfection in every bite.  <br/>
          From the comforting warmth of our breads to the delicate sweetness <br/>
          of our pastries, we invite you to indulge in a journey of taste and tradition. <br/>
        </p>
        <p className="text-xl text-gray-900 mt-8">
        Savor the warmth and flavor of our freshly baked treats, <br/>
        and let us make your day a little brighter, one delicious bite at a time. <br/>
        <i>Baked with <b>Love</b>, Enjoyed with <b>Passion</b>.</i>
        </p>
        <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Baked Menu</button>
        <img src={img} alt="Hero Image Stacked Donuts" className='w-[19rem] h-auto ml-[52rem] mt-[-27rem]' />
      </div>
    </div>
    <div className="menu-section"></div>
    </>
  )
}

export default HomePage;
