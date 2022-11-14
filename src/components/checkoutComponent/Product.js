import React from 'react'

function Product({drinkName, price}) {
    
    return (
        <div className='container-fluid d-flex justify-content-between align-items-center flex-wrap m-2'
            style={{ width: '100%', backgroundColor: '#F5AF0B', color: '#181818', height: 'auto', borderRadius: '5px' }}>
            <h6>{drinkName}</h6>
            <p>Ksh. {price}</p>
        </div>
    )
}

export default Product