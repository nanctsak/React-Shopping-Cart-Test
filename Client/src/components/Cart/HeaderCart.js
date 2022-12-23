import { React, useContext } from 'react'
import { BiCartAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import { DataContext } from '../../contexts/DataContext'


const HeaderCart = () => {
    // const [showModal, setShowModal] = useState(false);
    const dataContext = useContext(DataContext)
    const navigate = useNavigate()


    return (
        <>
            <button className='flex flex-row gap-2 items-center hover:bg-slate-300 p-2 rounded-xl' onClick={() => navigate("/cart")}>
                <h2 >Cart</h2>
                <BiCartAlt className='text-3xl' />
                <div className='text-xl w-8 p-1 text-white  rounded-full bg-red-600'><h2>{dataContext.sumData.sumQuantity || "0"}</h2></div>
            </button>
            {/* {showModal ? (
                <>
                    <Cart setShowModal={setShowModal} />
                </>
            ) : null} */}
        </>


    )
}

export default HeaderCart