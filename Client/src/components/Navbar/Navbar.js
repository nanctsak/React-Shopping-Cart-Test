import React from 'react'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className=" w-screen flex flex-row p-4 border shadow-md  fixed h-[50px]  bg-white z-40">
    <div className="w-[50%] flex items-center text-xl font-bold ">
      <h2>Shopping</h2>
    </div>
    <div className="w-[50%] flex items-center justify-end mr-10">
      <Menu />
    </div>
  </div>
  )
}

export default Navbar