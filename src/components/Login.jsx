import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };



return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal text-black ">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg text-gray-500">Login</h3>
     <div className="">
     <div className="m-4">
        <span className="text-gray-400">Email</span><br />
        <input
         {...register("email", { required: true })}
        type="email"
        placeholder="Enter your email" 
        className="w-80 px-3 border outline-none rounded-md py-3"/>
        {errors.email && <p>{errors.email.message}</p>}
     </div>
     <div className="m-4">
        <span className="text-gray-400">Password</span><br />
        <input
         {...register("password", { required: true })}
        type="password"
        placeholder="Enter your password" 
        className="w-80 px-3 border outline-none rounded-md py-3"/>
         {errors.password && <span>This field is required</span>}
     </div>
     <div className="flex m-2 justify-between">
     <button className=" ml-6 btn btn-secondary" type='submit'>Login</button>
     <p className="text-gray-500">Not registered! <Link to='/signin' className='link text-blue-500'>SignUp</Link></p>
     </div>
     </div>
  </div>
</dialog>
    </div>
  )
}

export default Login;
