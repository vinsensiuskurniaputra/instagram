import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
        <section className='md:col-span-2'>
            {/* Stories */}
            <Stories />
            {/* Post */}
            <Posts />
        </section>

        <section className='hidden md:inline-grid col-span-1'>
            {/* Mini Profile */}
            {/* Suggections */}
        </section>
    </main>
  )
}

export default Feed