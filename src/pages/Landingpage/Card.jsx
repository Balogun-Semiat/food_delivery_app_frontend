import React from 'react'


const Card = ({icon, header, text, src, name}) => {
  return (
    <div data-aos="flip-up" className=' w-full md:w-[300px] h-fit bg-gray-200 shadow-md rounded-lg  flex flex-col justify-center  gap-3 p-5'>
        <img src={src} alt="" />
        <h1>{name}</h1>
        <div className='bg-gray-100 shadow-sm rounded-full w-fit p-2'>{icon}</div>
        <h2 className='text-xl font-semibold text-[#D2691E]'>{header}</h2>
        <p className='text-sm'>{text}</p>

        <button className='border-2 mt-5 rounded-full bg-white hover:bg-[#D2691E] border-[#D2691E] hover:border-none py-1 px-2 w-fit text-sm hover:text-white'>Explore Menu</button>
    </div>
  )
}

export default Card