import React from 'react'
import CartItems from './CartItems'

const Cart = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <h2 className=' font-bold text-3xl bg-gradient-to-r from-blue-400 to-blue-200 p-2  rounded-md'>Cart</h2>
            <div className=' flex flex-wrap w-[60%] justify-center rounded-md p-4 gap-10'>
                <CartItems />
            </div>
        </div>
    )
}

export default Cart