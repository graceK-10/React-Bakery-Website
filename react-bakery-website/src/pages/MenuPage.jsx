import React, { useState } from "react";
import Navbar from "../components/Navbar";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

import img3 from "../assets/home-menu-img-2.jpeg";
import img5 from "../assets/download-2.jpeg";

const Menu = () => {
  const [menuItems] = useState([
    {
      id: 1,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 2,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
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
      img: img5,
    },
    {
      id: 5,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 6,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 1,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 2,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
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
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 5,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
    },
    {
      id: 6,
      title: "Raspberry Croissant",
      description:
        "Made with the finest ingredients and filled with the goodness of raspberry and rose, its a treat you wont forget.",
      img: img3,
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
    </>
  );
};

export default Menu;
