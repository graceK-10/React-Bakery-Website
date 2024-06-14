import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import '../index.css';

const Footer = () => {
  return (
    <footer>
      <div className='container flex justify-between text-center py-8 px-[8rem] rounded-lg shadow-md'>
        {/* Column 1: The Latest News */}
        <div className="footer-column mr-8">
          <h3 className="font-bold text-lg mb-4 text-white">The Latest News</h3>
          <ul className="text-gray-300">
            <li>Introducing a new recipe - Lemon Tart!</li>
            <li>Special offer: Buy one, get one free on cupcakes!</li>
            <li>Exciting news: Were expanding to a new location!</li>
            <li>Upcoming event: Cake decorating workshop next weekend!</li>
          </ul>
        </div>
        
        {/* Column 2: Connect with Us */}
        <div className="footer-column mr-8">
          <h3 className="text-white font-bold text-lg mb-4">Connect with Us</h3>
          <div className="flex items-center p-5 text-gray-300">
          <a href="https://www.facebook.com">
              <IoLogoFacebook className="icon-circle mx-4" size={40} />
            </a>
            <a href="https://www.instagram.com">
              <IoLogoInstagram className="icon-circle mx-4" size={35} />
            </a>
            <a href="https://www.tiktok.com">
              <IoLogoTiktok className="icon-circle mx-4" size={35} />
            </a>
          </div>
        </div>
        
        {/* Column 3: Get the Latest Updates */}
        <div className="footer-column">
          <h3 className="text-white font-bold text-lg mb-4">Get the Latest Updates</h3>
          <div className="flex items-center text-gray-300 p-5">
            <MdEmail className="mr-2" size={24} />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 text-white py-2 px-3 rounded-md focus:outline-none"
            />
            <button className="bg-secondary text-white px-5 py-3 rounded-full ml-2 hover:bg-tertiary btn-shadow">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
