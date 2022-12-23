import React from 'react'

const ProductItems = ({ product }) => {


    const thai = new Intl.NumberFormat('th', {
        style: 'currency',
        currency: 'THB'
    })

 

    const addCart = (data) => {
        fetch("http://localhost:8000/api/cart/addcart", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    console.log(res.message)       
                    window.location.reload();
                }
            })
            .catch(err => console.log("error = ", err))

    }
    return (
        (

            <div key={product._id} className='flex-1 flex flex-col items-center border rounded-md shadow-md min-w-[240px] px-2 py-2'>
                <div className='w-full' style={{
                    backgroundImage: `url(${product.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: 240,
                    height: 240,
                }}>
                </div>
                <h2 className='text-xl'>{product.name}</h2>
                <p className='text-xl text-red-600 font-bold'>{thai.format(product.price)}</p>
                <div className='w-[60%]'>
                    <button className='w-full justify-center text-xm flex rounded-md bg-blue-600 text-white hover:bg-blue-400' onClick={() => addCart(product)}>ADD TO CART</button>
                </div>
            </div>


        )
    )
}

export default ProductItems