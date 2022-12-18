import React, { useEffect, useState } from 'react'
import minifaker, { username } from "minifaker"
import Suggestion from './Suggestion'


const Suggections = () => {
    const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(5,(i)=>({
            id:i,
            username: minifaker.username({locale:"en"}).toLowerCase(),
            userImg:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70 )}`,
            jobTitle:minifaker.jobTitle(),
        }))
        console.log(suggestions)
        setSuggestions(suggestions)
    },[])
  return (
    <div className='mt-4'>
        <div className='flex justify-between mb-5 text-sm'>
            <h3 className='text-gray-400 font-bold'>Suggestion for you</h3>
            <button className='text-gray-600 font-semibold'>See all</button>
        </div>
        <div>
            {suggestions.map((suggestion) => (
                <Suggestion key={suggestion.id} {...suggestion} />
            ))}
        </div>
    </div>
  )
}

export default Suggections