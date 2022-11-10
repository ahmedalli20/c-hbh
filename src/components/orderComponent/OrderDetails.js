import React from 'react'
import SingleOrder from './SingleOrder'

function OrderDetails() {
    const styles={
        backgroundColor: "white", 
        height: '80vh',
        borderRadius: 10,
    }
    return (
        <div className='container' style={styles}>
            <h5 className='text-start p-3'>
                Order Details
            </h5>  
            <SingleOrder/>           
        </div>
    )
}

export default OrderDetails