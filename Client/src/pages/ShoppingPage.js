import React from 'react'
import Shopping from '../components/Shopping/Shopping'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const ShoppingPage = () => {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen flex flex-col ">
                <div className='mt-[50px]'>
                    <Shopping />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ShoppingPage