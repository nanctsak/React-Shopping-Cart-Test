import { React, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import { FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

const CartItems = () => {
    const dataContext = useContext(DataContext)
    const navigate = useNavigate()

    const thai = new Intl.NumberFormat('th', {
        style: 'currency',
        currency: 'THB'
    })

    const updateQuantity = (type, cart) => {
        if (cart.quantity === 1 && type === "minus") {
            deleteItem(cart._id)
        } else {
            fetch("http://localhost:8000/api/cart/update/" + cart._id, {
                method: "put",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: cart._id,
                    name: cart.name,
                    image_url: cart.image_url,
                    price: cart.price,
                    quantity: type === "plus" ? cart.quantity + 1 : cart.quantity - 1
                })
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success === true) {
                        console.log("อัพเดทข้อมูลเรียบร้อย")
                        window.location.reload();
                    }
                })
                .catch(err => console.log("error = ", err))
        }
    }

    const deleteItem = (id) => {
        fetch("http://localhost:8000/api/cart/delete/" + id, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    console.log("ลบข้อมูลเรียบร้อย")
                    window.location.reload();
                }
            })
            .catch(err => console.log("error = ", err))
    }

    
    return (
        <div>
            <div className='flex flex-col gap-2 p-2 overflow-y-auto max-h-[600px] '>
           
                {dataContext.cartData[0] ? dataContext.cartData.map((cart) => (
                    <div key={cart._id} className='flex flex-row border gap-10 items-center px-4'>
                        <div className='w-[20%]' style={{
                            backgroundImage: `url(${cart.image_url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: 250,
                            height: 150,
                        }}>
                        </div>
                        <h2 className='text-xl w-[30%]'>{cart.name}</h2>
                        <div className='w-[20%] flex flex-row gap-2'>
                            <button onClick={() => updateQuantity("minus", cart)} className='text-2xl  '><AiFillMinusSquare /></button>
                            <h2 className='text-2xl border  p-2'>{cart.quantity}</h2>
                            <button onClick={() => updateQuantity("plus", cart)} className='text-2xl '><AiFillPlusSquare /></button>
                        </div>

                        <p className='text-xl w-[20%]  font-bold'>{thai.format(cart.price * cart.quantity)}</p>
                        <button className='border bg-red-600 text-white' onClick={() => deleteItem(cart._id)}><FiX /></button>
                    </div>
                ))
                    :
                    (
                        <div className='h-[100px] flex items-center'><h2 className=' text-red-600 '>There are no products in the basket.</h2></div>
                    )}
            </div>
            <div className='flex flex-row gap-2 justify-end text-2xl p-2'>
                <h2>Total :</h2>
                {isNaN(dataContext.sumData.total) ?
                    (
                        <h2 className=' text-red-600'>{thai.format(0)}</h2>
                    )
                    : <h2 className=' text-red-600 text-3xl'>{thai.format(dataContext.sumData.total)}</h2>
                }

            </div>
            <div className='flex flex-col '>
                {dataContext.cartData[0] ? (<button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-2xl px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Buy
                </button>
                )
                    : ("")
                }
                <button
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => navigate('/home')}
                >
                    Back to shopping
                </button>

            </div>

        </div>
    )
}

export default CartItems