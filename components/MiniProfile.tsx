import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14'>
      <img
        src='https://media-exp1.licdn.com/dms/image/C4E03AQEUkOyuPRDRBg/profile-displayphoto-shrink_800_800/0/1632062579605?e=2147483647&v=beta&t=qrWGaUbDba5-fBnA3u_N7ixokE4gTlHi2l5b3xoFT0s'
        alt='user_profile'
        className='h-16 border p-1 rounded-full'
      />
      <div className='flex-1 ml-1'>
        <h2 className='font-bold  truncate md:w-[100px] lg:w-[230px]'>
          vinsensiuskurniaputra
        </h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  );
}

export default MiniProfile