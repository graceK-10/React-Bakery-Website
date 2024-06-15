import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

import img1 from "../assets/item-1.jpeg";
import img2 from "../assets/item-2.jpeg";
import img3 from "../assets/home-menu-img-1.jpeg";
import img4 from "../assets/item-4.jpeg";
import img5 from "../assets/home-menu-img-2.jpeg";
import img6 from "../assets/item-6.jpeg";
import img7 from "../assets/item-7.jpeg";
import img8 from "../assets/item-8.jpeg";
import img9 from "../assets/item-9.jpeg";
import img10 from "../assets/item-10.jpeg";
import img11 from "../assets/item-11.jpeg";
import img12 from "../assets/item-12.jpeg";

import img13 from "../assets/item-13.jpeg";
import img14 from "../assets/item-14.jpeg";
import img15 from "../assets/item-15.jpeg";
import img16 from "../assets/item-16.jpeg";
import img17 from "../assets/item-17.jpeg";
import img18 from "../assets/home-menu-img-3.jpeg";
import img19 from "../assets/item-19.jpeg";
import img20 from "../assets/item-20.jpeg";

const Menu = () => {
  const [menuItems] = useState([
    {
      id: 1,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img1,
    },
    {
      id: 2,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img2,
    },
    {
      id: 3,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 4,
      title: "Breakfast Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img4,
    },
    {
      id: 5,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img5,
    },
    {
      id: 6,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img6,
    },
    {
      id: 7,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img7,
    },
    {
      id: 8,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img8,
    },
    {
      id: 9,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img9,
    },
    {
      id: 10,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img10,
    },
    {
      id: 11,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img11,
    },
    {
      id: 12,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img12,
    },
    {
      id: 13,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img13,
    },
    {
      id: 14,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img14,
    },
    {
      id: 15,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img15,
    },
    {
      id: 16,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img16,
    },
    {
      id: 17,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img17,
    },
    {
      id: 18,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img18,
    },
    {
      id: 19,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img19,
    },
    {
      id: 20,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img20,
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-white/80 text-outline-tertiary text-shadow mt-[7rem] mb-12 text-center">
          Our Menu
        </h1>
        <div className="flex justify-center items-center">
          <input
            className="bg-white bg-opacity-20 text-white font-medium ring-1 ring-zinc-400 focus:ring-2 focus:ring-purple-800 outline-none duration-300 placeholder:text-white rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-purple-800 mb-8"
            autoComplete="off"
            placeholder="Search..."
            name="text"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((menuItem) => (
            <div key={menuItem.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={menuItem.img}
                alt={menuItem.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl text-white font-semibold mt-4">
                {menuItem.title}
              </h2>
              <p className="text-white mt-2">{menuItem.description}</p>
              <div className="flex justify-around items-center mt-6">
                <div className="icon-circle">
                  <MdOutlineShoppingCart size={27} />
                </div>
                <div className="icon-circle">
                  <FaRegHeart size={25} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
