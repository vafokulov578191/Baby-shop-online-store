import React from 'react'
import ItemComponent from '../../Components/ItemComponent';


const ProductBlock = ({ onPixel, products }) => {

    if (products < 5) {
        onPixel('1000px')
    }

    return (
        <>
            {
                products.map((item) =>
                    <ItemComponent item={item} />
                )
            }
        </>
    )
}

export default ProductBlock
