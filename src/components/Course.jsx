import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {
  const [cardData, setCardData]=useState([])

  useEffect(()=>{
    const fetchCardData= async ()=>{
      try{
const res= await axios.get('http://localhost:4000/card')
          setCardData(res.data)
          console.log("helo",res.data)
      }
      catch(err){
        console.log('not found',err)
      }
    }
    fetchCardData()
  },[])

  
  return (
    <div>
        <div className="max-w-screen-2xl container mx-auto  md:px-20 px-4 ">
            <div className="mt-18 justify-center text-center items-center">
    <h1 className="text-2xl md:text-4xl">We'r deligheted to have you <span className="text-[#366679]"> here! :)</span></h1>
    <p className="mt-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam aliquam veniam nulla, minus vitae rerum recusandae. Neque quaerat aperiam necessitatibus libero alias molestiae dolores! Eius explicabo corrupti saepe aut, velit perferendis id esse, necessitatibus, molestiae repellat perspiciatis dolores accusamus aperiam! Consectetur, corporis cum hic facere facilis molestias sit assumenda quis distinctio similique odio.</p>
    <Link to='/'><button className='btn bg-[#264653] text-white mt-6'>Back</button></Link>
    </div>
    <div className=" mt-6 grid grid-cols-1 md:grid-cols-4">
   {cardData.map((item)=>(
 <Card item={item} key={item.id}/>
   ))} 
    </div>
      </div>
      
    </div>
  )
}

export default Course
