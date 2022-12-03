import React from 'react';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import images from '../images/LOGO.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className='flex justify-between my-5 mx-5 md:hidden'>
                <span>
                <img className='w-auto' src={images} alt="Logo" />
                </span>
                <span>
                    {open ? <XMarkIcon className='w-9' /> : <Bars3Icon className='w-9' />}
                </span>
            </div>
            <nav className={`md:flex justify-evenly items-center w-full text-center h-20 md:sticky duration-500 ease-in  absolute ${open ? 'top-20' : 'top-[-490px]'}`}>
                <div className="logo md:block hidden">
                    <img className='w-auto' src={images} alt="Logo" />
                </div>
                <div className="md:flex md:bg-white bg-gray-200 ">
                <li className='list-none text-xl px-5 my-4'>
                    <NavLink to='/' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Home</NavLink>
                </li>
                <li className='list-none text-xl px-5 my-4'>
                    <NavLink to='/reviews' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Reviews</NavLink>
                </li>
                <li className='list-none text-xl px-5 my-4'>
                    <NavLink to='/dashboard' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Dashboard</NavLink>
                </li>
                <li className='list-none text-xl px-5 my-4'>
                    <NavLink to='/blog' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>Blog</NavLink>
                </li>
                <li className='list-none text-xl px-5 my-4'>
                    <NavLink to='/about' className={({isActive})=> isActive ? 'text-[#F55054] border-b-2 border-[#F55054] '  : 'text-black'}>About</NavLink>
                </li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;