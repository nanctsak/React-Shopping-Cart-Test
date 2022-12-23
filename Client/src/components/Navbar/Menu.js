import React from 'react'
import HeaderCart from '../Cart/HeaderCart'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-row gap-6 text-black text-xl font-semibold'>
            <div className='flex items-center transition duration-150 ease-in-out hover:scale-110'><button onClick={() => navigate("/home")}>Products</button></div>
            <HeaderCart />
        </div>
    )
}

export default Menu