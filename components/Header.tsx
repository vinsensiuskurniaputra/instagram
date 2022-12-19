import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const {data: session} = useSession()
  console.log(session)
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-[10]">
      <div className='flex justify-between items-center max-w-6xl xl:mx-auto mx-4'>
        {/* Left */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            alt=''
            className='object-contain'
          />
        </div>
        <div className='cursor-pointer h-24 w-24 grid lg:hidden items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
            alt=''
            className='object-contain h-12 w-12'
          />
        </div>
        {/* Middle */}
        <div className='border border-gray-500 flex items-center rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 ring-black'>
          <SearchIcon className='h-5 text-gray-500' />
          <input
            type='text'
            className='focus:outline-none ml-2 bg-gray-50 max-w-[70px] md:max-w-xl'
            placeholder='Search'
          />
        </div>
        {/* Right */}
        <div className='flex items-center space-x-4'>
          <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out' />
          {session ? (
            <>
              <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out' />
              <img
                src={session.user?.image?.toString()}
                onClick={signOut}
                alt='profil'
                className='h-10 rounded-full cursor-pointer'
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
