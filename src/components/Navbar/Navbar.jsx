import React from 'react';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import images from '../images/LOGO.png'

const Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
        <div>
            <nav className={`md:flex justify-evenly items-center h-20`}>
                <div className="logo">
                    <img src={images} alt="" />
                </div>
                <div className="md:flex">
                <li className='list-none text-xl px-5'>
                    <NavLink to='/' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Home</NavLink>
                </li>
                <li className='list-none text-xl'>
                    <NavLink to='/reviews' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Reviews</NavLink>
                </li>
                <li className='list-none text-xl px-5'>
                    <NavLink to='/dashbord' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Dashobord</NavLink>
                </li>
                <li className='list-none text-xl px-5'>
                    <NavLink to='/blog' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Blog</NavLink>
                </li>
                <li className='list-none text-xl'>
                    <NavLink to='/about' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>About</NavLink>
                </li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;