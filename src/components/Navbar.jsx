import React from "react";

export const Navbar = () => {
    return <nav className='w-7/8 fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10'>

        <ul className='flex gap-8 text-xl'>
            <li className="relative group cursor-pointer" >
                <a href='#home'>Home</a>
                <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full'></span>
            </li>

            <li className="relative group cursor-pointer" >
                <a href='#projects'>Projects</a>
                <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full'></span>
            </li>

            <li className="relative group cursor-pointer" >
                <a href='#contact'>Contact</a>
                <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full'></span>
            </li>
        </ul>

        <button className='bg-gradient-to-r from-blue-500 to-green-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:from-blue-600 hover:to-green-500 hover:shadow-green-500 shadow-blue-500'>Resume</button>
    </nav>
}