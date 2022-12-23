import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext({
    productData: [],
    cartData: [],
    sumData: {}
});

export const DataContextProvider = ({ children }) => {
    const [productData, setProductData] = useState([]); 
    const [cartData, setCartData] = useState([])
    const [sumData, setSumData] = useState({
        sumQuantity: 0,
        tutal: 0
    })


    useEffect(() => {
        fetch("http://localhost:8000/api/product/all", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(respone => respone.json())
            .then(respone => {
                console.log(respone)
                setProductData(respone)             
            })
            .catch(err => console.log("error = ", err))
    }, [])

    useEffect(() => {
        fetch("http://localhost:8000/api/cart/all", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(respone => respone.json())
            .then(respone => {
                console.log(respone)
                setCartData(respone)
                sum(respone)
            })
            .catch(err => console.log("error = ", err))
    }, [])

    const sum = (cart) => {
            var quantity = cart.map(cart => cart.quantity).reduce((acc, amount) => acc + amount);
            var total = cart.map(cart => cart.price * cart.quantity).reduce((acc, amount) => acc + amount);
            setSumData(values => ({ ...values, sumQuantity: quantity, total: total }))
    }


    return (
        <DataContext.Provider value={{
            productData,
            cartData,
            sumData
        }}>
            {children}
        </DataContext.Provider>
    );
}