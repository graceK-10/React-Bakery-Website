import React, {useState} from 'react';
import { MdBakeryDining } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";
import '../index.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    };

  return (
    <header className='fixed w-full z-10'>
        <nav className='container bg-white flex justify-between items-center  p-4 rounded-lg shadow-md'>
            <div className='flex items-center gap-2 text-3xl text-white'>
                <MdBakeryDining size={65} className='text-secondary' />
                <a href="/logo" className="href ">Baked Bliss</a>
            </div>
            <div className='hidden md:flex items-center gap-8 font-medium text-xl text-white'>
          <a href="/" className=' hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full'>Home</a>
          <a href="/about" className='hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full'>About Us</a>
          <a href="/menu" className='hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full'>Baked Menu</a>
          <button className="px-4 py-2 bg-secondary border-fourthColor text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg">Baked Cart</button>
        </div>
            {/* navbar open and close responsive icon */}
            <div className='md:hidden pr-[5rem] sm:pr-[5rem] flex items-center'>
                {menu ? (
                    <FaEye size={25} onClick={handleClick} />
                ) : (
                    <RxEyeClosed size={25} onClick={handleClick} />
                )}
            </div>
        </nav>

        {/* Responsive section */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col fixed bg-primary text-white left-0 top-25 w-full h-fit font-semibold text-2xl text-center pt-8 pb-4 gap-8 transition-transform duration-300 ease-in-out`}>
                <a href="/" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary'>Home</a>
                <a href="/" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary'>About Us</a>
                <a href="/" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary'>Baked Menu</a>
                <button className='hidden md:flex border-2 border-secondary text-base px-3 py-0.5 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition duration-100 ease-linear'>Baked Cart</button>
            </div>
    </header>
  )
}

export default Navbar;
