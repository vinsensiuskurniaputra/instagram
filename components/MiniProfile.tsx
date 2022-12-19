import React from 'react'
import { useSession, signOut } from 'next-auth/react';

const MiniProfile = () => {
  const {data: session} = useSession()
  return (
    <div className='flex items-center justify-between mt-14'>
      <img
        src={session?.user?.image}
        alt='user_profile'
        className='h-16 border p-1 rounded-full'
      />
      <div className='flex-1 ml-1'>
        <h2 className='font-bold  truncate md:w-[100px] lg:w-[230px]'>
          {session?.user?.username}
        </h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
      </div>
      <button onClick={signOut} className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  );
}

export default MiniProfile