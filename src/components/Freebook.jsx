import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card';
import axios from 'axios';

const Freebook = () => {
    const [cardData, setCardData]=useState([])
    
    // const filterData = list.filter((data) => data.category === "Free")
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
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div  className="text-center md:text-start">
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className="">
                    <h1 className="font-semiboldt text-xl pb-2">Free offered courses</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, odit temporibus necessitatibus quas ut blanditiis quos qui pariatur suscipit autem, saepe deleniti dolorum sit dolores dignissimos praesentium magnam neque sed?</p>
                </div>
          
            <div className="">
                <Slider {...settings}>
                    {cardData.map((item)=>(
                        <Card item={item} key={item.id}/>
                     ))} 
                </Slider>
            </div>  </div>
         
        </div>
    )
}

export default Freebook
