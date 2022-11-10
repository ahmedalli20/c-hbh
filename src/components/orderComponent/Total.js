import React from 'react'

function Total({total}) {
    return (
        <div className='bg-warning d-flex justify-content-between align-items-center m-2 text-center p-1' style={{ width: '70%', borderRadius: 5, height: 'auto' }}>
            <h5 className='m-2'>Total</h5>
            <h5 className='m-2'>Ksh. {total}</h5>
        </div>
    )
}

export default Total