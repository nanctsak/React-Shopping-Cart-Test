// import { React, useState, useEffect, useContext } from 'react'
// import { DataContext } from '../../contexts/DataContext'
// import { FiX } from "react-icons/fi";

// const Cart = ({ setShowModal }) => {
//     const dataContext = useContext(DataContext)

//     const thai = new Intl.NumberFormat('th', {
//         style: 'currency',
//         currency: 'THB'
//     })

//     const deleteItem = (id) => {

//         fetch("http://localhost:8000/api/cart/" + id, {
//             method: "delete",
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//             .then(res => res.json())
//             .then(res => {
//                 if (res.success === true) {
//                     console.log("ลบข้อมูลเรียบร้อย")
//                     window.location.reload();
//                 }
//             })
//             .catch(err => console.log("error = ", err))
//     }

//     return (
//         <>
//             <div
//                 className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//             >
//                 <div className="relative w-auto my-6 mx-auto max-w-3xl">

//                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

//                         <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                             <h3 className="text-3xl font-semibold">
//                                 Shopping Cart
//                             </h3>
//                             <button
//                                 className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                                     ×
//                                 </span>
//                             </button>
//                         </div>

//                         <div className="relative p-6 flex-auto">
//                             <div className='flex flex-col gap-2 p-2 overflow-y-auto max-h-[400px]'>
//                                 {dataContext.cartData[0] ? dataContext.cartData.map((cart) => (
//                                     <div className='flex flex-row border gap-2 items-center px-4'>
//                                         <div className='w-[20%]' style={{
//                                             backgroundImage: `url(${cart.image_url})`,
//                                             backgroundRepeat: "no-repeat",
//                                             backgroundSize: "cover",
//                                             backgroundPosition: "center",
//                                             width: 150,
//                                             height: 100,
//                                         }}>
//                                         </div>
//                                         <h2 className='text-xl w-[30%]'>{cart.name}</h2>
//                                         <h2 className='text-2xl w-[10%]  border p-2'>{cart.quantity}</h2>
//                                         <p className='text-xl w-[30%]  font-bold'>{thai.format(cart.price * cart.quantity)}</p>
//                                         <button className='border bg-red-600 text-white' onClick={() => deleteItem(cart._id)}><FiX /></button>
//                                     </div>
//                                 ))
//                                     :
//                                     (
//                                         <div className='h-[100px] flex items-center'><h2 className=' text-red-600 '>There are no products in the basket.</h2></div>
//                                     )}
//                             </div>
//                             <div className='flex flex-row gap-2 justify-end text-2xl p-2'>
//                                 <h2>Total :</h2>
//                                 {isNaN(dataContext.sumData.total) ?
//                                     (
//                                         <h2 className=' text-red-600'>{thai.format(0)}</h2>
//                                     )
//                                     : <h2 className=' text-red-600'>{thai.format(dataContext.sumData.total)}</h2>
//                                 }

//                             </div>


//                         </div>

//                         <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                             <button
//                                 className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                                 type="button"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 Close
//                             </button>
//                             <button
//                                 className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                                 type="button"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 Buy
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
//         </>
//     )
// }

// export default Cart