import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
      <div  className=" w-[400px] flex m-auto mt-26 justify-center items-center text-black ">
        <div className="">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-gray-500">Signup</h3>
           <div className="">
           <div className="m-4">
              <span className="text-gray-400">Name</span><br />
              <input type="text"
              placeholder="Enter your name" 
              className="w-80 px-3 border outline-none rounded-md py-3"/>
              
           </div>
           <div className="m-4">
              <span className="text-gray-400">Email</span><br />
              <input type="email"
              placeholder="Enter your email" 
              className="w-80 px-3 border outline-none rounded-md py-3"/>
              
           </div>
           <div className="m-4">
              <span className="text-gray-400">Password</span><br />
              <input type="password"
              placeholder="Enter your password" 
              className="w-80 px-3 border outline-none rounded-md py-3"/>
              
           </div>
           <div className="flex m-2 justify-between">
           <button className=" ml-6 btn btn-secondary">Signup</button>
           <p className="text-gray-500">Not registered! <Link to='/' className='link text-blue-500'>Login</Link></p>
           </div>
           </div>
        </div>
      </div>
    </div>
    
  )
}

export default Signup
