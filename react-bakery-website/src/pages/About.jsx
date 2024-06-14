import React from 'react'
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import '../index.css';

import img from '../assets/hero-img-2.png';
import img2 from '../assets/about-img-1.jpeg';

const About = () => {
  return (
    <>
    <Navbar />
    {/* Hero Section */}
    <div className="hero-section">
  <div className="swirl-bg"></div>    
  <div className="content mx-[3rem] w-[50rem] text-center" >
    <h1 className="text-5xl font-bold text-white/80 mt-[3rem] mb-12 text-outline-tertiary text-shadow">About Baked Bliss!</h1>
    <p className="text-xl text-white">
    We are a family-owned bakery dedicated to bringing you the finest baked goods made from the highest quality ingredients. Our passion for baking is rooted in tradition, and we take pride in creating delicious treats that bring joy to our customers.
    </p>
    <p className=' text-xl text-white mt-4'>
      From baking biscuits on a street corner to owning a local bakery, our story is born from immigrant parents who instilled in us a love for baking and a commitment to excellence. Every recipe we create reflects our heritage and the values we hold dear.
    </p>
    <p className="text-xl text-white mt-8">
    At Baked Bliss, we believe in the power of community and the joy that 
    comes from sharing freshly baked goods with friends and family. 
    Our team of skilled bakers and friendly staff are dedicated to 
    ensuring that every visit to our bakery is a delightful experience.
    </p>
    <p className="text-xl text-white mt-8">
   
    <i>Baked with <b>Love</b>, Enjoyed with <b>Passion</b>.</i>
    </p>
    <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Baked Menu</button>
    <img src={img} alt="Hero Image Stacked Donuts" className='w-[20rem] h-auto ml-[52rem] mt-[-33rem]' />
    <img src={img} alt="Hero Image Stacked Donuts" className='w-[20rem] h-auto ml-[-22rem] mt-[-33rem]' />
  </div>
</div>

      {/* Our Mission Section */}
      <div className="about-section">
    <div className='text-container'>
      <h3 className="text-5xl font-bold text-white mt-[12rem] mb-12 text-outline-tertiary text-shadow">About Us</h3>
      <p className='text-white'>We are a family-owned bakery dedicated to bringing you the finest baked goods made from the highest quality ingredients. Our passion for baking is rooted in tradition, and we take pride in creating delicious treats that bring joy to our customers.</p>
      <p className='text-white mt-8'>From baking biscuits on a street corner to owning a local bakery, our story is born from immigrant parents who instilled in us a love for baking and a commitment to excellence. Every recipe we create reflects our heritage and the values we hold dear.</p>
      <button className="px-4 py-2 mt-10 bg-secondary text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">About Us</button>
    </div>  
    <div className='image-container'>
      <img src={img2} alt="Hero Image Stacked Donuts" className='about-image mt-[-10rem] ml-[8rem]'/>
    </div>
  </div>

    {/* <Footer /> */}
    </>
  )
}

export default About