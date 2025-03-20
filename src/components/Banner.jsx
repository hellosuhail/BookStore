import React from 'react'
import banner from '../../public/books.jpg'

const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
    <div className="space-y-12 md:w-1/1 mt-12 order-2  md:order-0 md:mt-32">  
         <div className="w-full md:w-1/2">
      <h1 className=" w-130 font-bold text-4xl">Hello, Welcome here to learn somthing <span className='text-[#264653]'> new everyday!!</span></h1>
     </div>
      <p className='w-130'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae tempora, sint iste tenetur sit consequuntur consectetur dolorum perferendis magnam ipsum rerum totam asperiores cupiditate exercitationem quos!
      </p>
      <label className="input input-bordered w-126 flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
<button className="btn bg-[#264653] text-white">Secondary</button>

      </div>
      
      <div className="w-full  md:w-1/1">
      <img src={banner} className="w-full  m-12" alt="" /></div>
      </div>
    </>
  )
}

export default Banner
