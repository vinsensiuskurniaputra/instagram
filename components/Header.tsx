import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl'>
      {/* Left */}
      <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid items-center'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          alt=''
          className='object-contain'
        />
      </div>
      <div className='cursor-pointer h-24 w-24 relative lg:hidden items-center'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
          alt=''
          className='object-contain'
        />
      </div>
      {/* Middle */}
      <div className='border border-gray-500 flex items-center rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 ring-black'>
        <SearchIcon className='h-5 text-gray-500' />
        <input
          type='text'
          className='focus:outline-none ml-2 bg-gray-50'
          placeholder='Search'
        />
      </div>
      {/* Right */}
      <h1>Right Sides</h1>
    </div>
  );
};

export default Header;
