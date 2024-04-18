import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:1,
            title:'Kathmandu'
        },
        {
            id:2,
            title:'Gulmi'
            
        },
        {
            id:3,
            title:'Lalitpur'
        },
        {
            id:4,
            title:'Bhaktpur'
            
        },
        {
            id:5,
            title:'Butwol'
        },
    ]
  return (
    <div className='flex item-center justify-around my-6'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
      
    </div>
  )
}

export default TopButtons
