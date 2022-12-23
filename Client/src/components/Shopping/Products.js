import { React, useContext } from 'react'
import ProductItems from './ProductItems'
import { DataContext } from '../../contexts/DataContext'

const Products = () => {
    const dataContext = useContext(DataContext)

    return (
        <>
            {dataContext.productData.map((product) => {
                return <ProductItems product={product} />
            }
            )}
        </>
    )
}

export default Products