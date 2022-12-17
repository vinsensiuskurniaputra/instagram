import React from 'react'

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div className='flex justify-between items-center max-w-6xl'>
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
        <h1>Right Sides</h1>
      </div>
      {/* Middle */}

      {/* Right */}
    </div>
  );
}

export default Header