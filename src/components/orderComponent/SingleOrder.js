import React from 'react'

function SingleOrder({ image, beer, price, pieces }) {
    return (
        <>
            <div className='bg-warning d-flex justify-content-evenly align-items-center m-2 text-center' style={{ width: '70%', borderRadius: 5, height: '40px' }}>
                <div className=''><img src={image} style={{ height: '40px', width: 'auto', padding: '5px' }} /></div>
                {/* <div> */}
                <div><h6>{beer}</h6></div>
                <h6>{price}</h6>
                <h6>{pieces}</h6>
                {/* </div> */}
                <div>
                    <button className='m-1' style={{ backgroundColor: "maroon", width: '50px', border: 'none', color: "#f2f2f2", borderRadius: '5px' }}>-</button>
                    <button className='m-1' style={{ backgroundColor: "maroon", width: '50px', border: 'none', color: "#f2f2f2", borderRadius: '5px' }}>+</button>
                </div>
            </div>
        </>
    )
}

export default SingleOrder