import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggections from './Suggections'

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto space-x-10'>
      <section className='md:col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Post */}
        <Posts />
      </section>

      <section className='hidden md:inline-grid col-span-1'>
        <div className='fixed w-[380px]'>
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggections */}
          <Suggections />
        </div>
      </section>
    </main>
  );
}

export default Feed