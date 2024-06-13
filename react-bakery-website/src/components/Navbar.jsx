import React, {useState} from 'react';
import { Link } from "react-router-dom";
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
        <nav className='container flex justify-between items-center  p-4 rounded-lg shadow-md'>
            <div className='flex items-center gap-2 text-3xl'>
                <MdBakeryDining size={65} className='text-secondary' />
                <a href="/logo" className="href ">Baked</a>
            </div>
            <div className='hidden md:flex items-center gap-8 font-medium text-lg'>
                <Link to="/" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary'>Home</Link>
                <Link to="/about" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary'>About Us</Link>
                <Link to="/menu" className='hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary'>Baked Menu</Link>
                <Link to="/cart" className='hidden md:flex border-2 border-secondary text-base px-3 py-0.5 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition duration-100 ease-linear'>Baked Cart</Link>
            </div>
            {/* navbar open and close responsive icon */}
            <div className='md:hidden flex items-center'>
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
