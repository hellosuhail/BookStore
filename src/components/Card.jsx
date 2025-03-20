import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({item}) => {
let theme=document.body.classList.add("dark-mode")
const navigate=useNavigate()
const buyHandler=()=>{
  navigate(`/buy/${item.id}`)
}
  return (
    <div className="m-4">
      <div style={{theme}} className="card   shadow-xl shadow-gray-100 ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" 
      className="hover:scale-110 duration-300 h-76 w-full"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge text-white bg-[#264653]">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline  hover:bg-[#264653] hover:text-white cursor-pointer">{item.price}$ </div>
      <div className=" badge badge-outline p-4 hover:bg-[#264653] hover:text-white cursor-pointer" onClick={buyHandler}>Buy Now </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
