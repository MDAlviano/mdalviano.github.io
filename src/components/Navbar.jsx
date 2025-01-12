import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-row justify-between py-6 px-10 bg-white bg-opacity-70 border-b border-blue-200'>
        <a href="/" className='text-2xl font-semibold text-blue-500 hover:text-blue-600'>Alviano</a>
        <ul className='flex flex-row gap-20 justify-around self-center'>
            <li onClick={() => navigate("/")} className='cursor-pointer text-blue-500 hover:text-blue-700 text-lg font-medium'>About</li>
            <li onClick={() => navigate("/")} className='cursor-pointer text-blue-500 hover:text-blue-700 text-lg font-medium'>Projects</li>
            <li onClick={() => navigate("/")} className='cursor-pointer text-blue-500 hover:text-blue-700 text-lg font-medium'>Blog</li>
            <li onClick={() => navigate("/")} className='cursor-pointer text-blue-500 hover:text-blue-700 text-lg font-medium'>Contact</li>
        </ul>
        <button className='text-end w-fit py-2 px-5 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200'>Masuk</button>
    </div>
  )
}

export default Navbar;