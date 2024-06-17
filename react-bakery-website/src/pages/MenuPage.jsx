import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

import { useCart } from "../CartContext";

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
  const items = [
    {
      id: 1,
      title: "Red Velvet Waffles",
      description:
        "Delight in the art of breakfast with our Red Velvet Marble Waffles, a perfect blend of classic and red velvet batter.",
      img: img1,
      price: 29.99,
    },
    {
      id: 2,
      title: "Cookies & Cream Muffins",
      description:
        "Moist chocolate muffins swirled with buttercream frosting, drizzled with chocolate ganache, and crowned with mini Oreo cookies!",
      img: img2,
      price: 24.99,
    },
    {
      id: 3,
      title: "French Crepes",
      description:
        "These classic French Crepes are flavorful and tender, with a buttery-crisp edge. Light and soft and can be served sweet or savory.",
      img: img3,
      price: 14.99,
    },
    {
      id: 4,
      title: "Vegan Strawberry Tarts",
      description:
        "Mini Vegan Strawberry Tarts with buttery pastry, chocolate filling, strawberry compote and whipping cream.",
      img: img4,
      price: 11.99,
    },
    {
      id: 5,
      title: "Raspberry Croissant",
      description:
        "This Raspberry Rose Lychee Croissant is  filled with raspberry rose compote, a lychee glaze and freeze-dried raspberries.",
      img: img5,
      price: 34.99,
    },
    {
      id: 6,
      title: "White Chocolate Waffle",
      description:
        "A delicious chocolate glazed Belgian waffle with sprinkles loaded with choco chips and dipped in a rich white chocolate glaze",
      img: img6,
      price: 14.99,
    },
    {
      id: 7,
      title: "Breakfast Bagel Sandwich",
      description:
        "Healthy freshly baked bagel bun filled with a slice of cheddar cheese, scrambled eggs, rucola and fried bacon",
      img: img7,
      price: 49.99,
    },
    {
      id: 8,
      title: "Chocolate Oreo Cake",
      description:
        "Everyone's favorite cooki, now made into a deliciously irresistible cake! Covered in cookies and cream frosting.",
      img: img8,
      price: 349.99,
    },
    {
      id: 9,
      title: "Banana Streusel Muffins",
      description:
        "Indulge in the ultimate treat featuring ripe bananas, chocolate chips, and a buttery streusel topping.",
      img: img9,
      price: 24.99,
    },
    {
      id: 10,
      title: "Nutella Croissants",
      description:
        "Made with a crispy puff pastry exterior these Croissants are flaky, buttery, warm, gooey, chocolatey, and so delicious!",
      img: img10,
      price: 24.99,
    },
    {
      id: 11,
      title: "Hot Cross Buns",
      description:
        "A special Good Friday treat, these traditional Hot Cross Buns are packed with flavor and all the charm of their long, rich history!",
      img: img11,
      price: 14.99,
    },
    {
      id: 12,
      title: "Chimney Cakes",
      description:
        "Customer favorite handrolled chimney cakes, topped with soft serve ice cream and any toppings of your choice.",
      img: img12,
      price: 34.99,
    },
    {
      id: 13,
      title: "Donuts",
      description:
        "Choclate glazed donuts, pick any flavour of your choice and you can pick a topping of your choosing as well.",
      img: img13,
      price: 19.99,
    },
    {
      id: 14,
      title: "Blueberry Muffins",
      description:
        "These tender and moist white chocolate blueberry muffins blend the richness of white chocolate with the fruity burst of fresh blueberries.",
      img: img14,
      price: 24.99,
    },
    {
      id: 15,
      title: "Vanilla Cake",
      description:
        "Fit for a birthday celebration, this white chocolate drip cake topped with frozen iced ganache and mini macarons",
      img: img15,
      price: 349.99,
    },
    {
      id: 16,
      title: "Strawberry Choc Waffle",
      description:
        "A delicious strawberry flavoured chocolate glazed Belgian waffle with sprinkles, dipped in a strawberry chocolate glaze.",
      img: img16,
      price: 14.99,
    },
    {
      id: 17,
      title: "Challah Bread",
      description:
        "This homemade-style Challah Breadis a rich and slightly sweet pillow-y bread that is both a pleasure to eat and to look at.",
      img: img17,
      price: 19.99,
    },
    {
      id: 18,
      title: "Breakfast Croissant",
      description:
        "These Maple-Dijon Breakfast Croissant Sandwiches are filled with cheese, fried bacon, a fried egg and a 2 fried sausages.",
      img: img18,
      price: 49.99,
    },
    {
      id: 19,
      title: "Raspberry Choc Muffins",
      description:
        "A classic flavor combination that are delicious, light and fluffy. Topped with a tangy and sweet fresh raspberry buttercream",
      img: img19,
      price: 19.99,
    },
    {
      id: 20,
      title: "Chocolate Pancakes",
      description:
        "Chocolate Pancakes are so rich and decadent, they're a chocolate lover's dream. Fluffy and filled with melted chocolate chips.",
      img: img20,
      price: 14.99,
    },
  ];

  // Holds the current value of the search input.
  const [menuInput, setMenuInput] = useState("");
  // Holds the list of products filtered based on the search query.
  const [filteredItems, setFilteredItems] = useState(items);

  const { addItemToCart } = useCart();

  // handleMenuInputChange function updates the menuInput state and calls filterProducts with the new search query.
  const handleMenuInputChange = (event) => {
    setMenuInput(event.target.value);
    filterProducts(event.target.value);
  };

  // Create filterProducts function to filter the products based on the search query.
  // Filters the products list based on the search query and updates the filteredProducts state.
  // If the search query is empty, it sets filteredProducts to the full products list.
  // Otherwise, it filters the products whose name includes the search query (case-insensitive).
  const filterProducts = (query) => {
    if (query === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((menu) =>
        menu.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-white/80 text-outline-tertiary text-shadow mt-[7rem] mb-12 text-center">
          Our Menu
        </h1>
        <div className="flex justify-center items-center">
          <div className="relative max-w-md">
            <div className="flex items-center">
              <input
                className="bg-white bg-opacity-20 text-white font-medium ring-1 ring-zinc-400 focus:ring-2 focus:ring-purple-800 outline-none duration-300 placeholder:text-white rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-purple-800 mb-8 w-full"
                autoComplete="off"
                placeholder="Search..."
                value={menuInput}
                onChange={handleMenuInputChange}
                name="text"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl text-white font-semibold mt-4">
                {item.title}
              </h2>
              <p className="text-white mt-2">{item.description}</p>
              <p className="text-white mx-2 my-8 text-lg float-right">
                R{item.price}{" "}
              </p>
              <div className="flex justify-around items-center mt-6">
                <div
                  className="icon-circle"
                  onClick={() => addItemToCart(item)}
                >
                  <MdOutlineShoppingCart size={27} />
                </div>
                <div className="icon-circle">
                  <FaRegHeart size={25} />
                </div>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="p-2">No products found</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
