import React from 'react'

const Story = ({username, img}) => {
  return (
    <div>
      <img src={img} alt={username} className='rounded-full h-14 p-[1.5px] border-2 border-red-500 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out' />
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  );
}

export default Story