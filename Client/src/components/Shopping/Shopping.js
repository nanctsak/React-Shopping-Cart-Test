import React from 'react'
import Products from './Products'

const Shopping = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <h2 className=' font-bold text-3xl bg-gradient-to-r from-blue-400 to-blue-200 p-2  rounded-md'>Products</h2>
            <div className=' flex flex-wrap w-[60%] justify-center rounded-md p-4 gap-10'>
                <Products />
            </div>
        </div>
    )
}

export default Shopping