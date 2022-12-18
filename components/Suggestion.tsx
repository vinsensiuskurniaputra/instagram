import React from 'react'

const Suggestion = ({username, userImg, jobTitle}) => {
  return (
    <div className='flex items-center mt-3 justify-between'>
        <img src={userImg} alt="user_profile" className='rounded-full p-1 border h-10'/>
        <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{username}</h2>
            <h3 className='text-sm text-gray-400 truncate max-w-[230px]'>{jobTitle}</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Follow</button>
    </div>
  )
}

export default Suggestion