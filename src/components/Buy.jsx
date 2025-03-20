import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
const BuyPage = () => {
  const { id } = useParams(); // Get the item ID from URL
const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center h-screen">
       <button className="btn btn-outline btn-primary absolute top-20 left-20" onClick={()=>navigate('/')}><FaArrowLeftLong /></button>
      <div className="p-8 border rounded-lg shadow-lg bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Buy Item ID: {id}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Complete your purchase for this item.
        </p>
        <a href="#" download={'https://www.arvindguptatoys.com/arvindgupta/funny-up-ruskin.pdf'} className="btn btn-outline btn-primary m-4">Download</a>
      </div>
    </div>
  );
};

export default BuyPage;