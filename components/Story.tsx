import React from 'react'
import { PlusIcon } from '@heroicons/react/solid';

const Story = ({username, img, isUser}) => {
  return (
    <div className='relative cursor-pointer group'>
      <img
        src={img}
        alt={username}
        className='rounded-full h-14 p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out'
      />
      {isUser && (
        <PlusIcon className='absolute h-6 right-0 left-0 top-4 mx-auto text-white' />
      )}
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  );
}

export default Story