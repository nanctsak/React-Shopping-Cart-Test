import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

const CartPage = () => {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen flex flex-col ">
                <div className='mt-[50px]'>
                    <Cart />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CartPage