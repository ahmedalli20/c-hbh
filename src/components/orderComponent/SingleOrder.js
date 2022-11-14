import React, {useContext} from 'react'
import { CartContext } from '../dashboardComponents/CartContext'
// sing object of product data
function SingleOrder({ singleOrder }) {
    const {cart, setCart} = useContext(CartContext);
    function handleDelete(e){
        e.preventDefault();
        const newCart = cart.filter(item => item.id !== singleOrder.id)
        setCart(newCart);
    }
    return (
        <>
            <div className='bg-warning d-flex justify-content-evenly align-items-center m-2 text-center' style={{ width: '70%', borderRadius: 5, height: 'auto' }}>
                <div className=''><img src={singleOrder.image_url} style={{ height: '40px', width: 'auto', padding: '5px' }} /></div>
                {/* <div> */}
                <div><h6>{singleOrder.name}</h6></div>
                <h6>Ksh. {singleOrder.price}</h6>
                <h6>{singleOrder.quantity} pcs</h6>
                
                <div>
                    <button onClick={handleDelete} className='m-1' style={{ backgroundColor: "maroon", width: '50px', border: 'none', color: "#f2f2f2", borderRadius: '5px' }} >-</button>
                    {/* <button className='m-1' style={{ backgroundColor: "maroon", width: '50px', border: 'none', color: "#f2f2f2", borderRadius: '5px' }}>+</button> */}
                </div>
            </div>
        </>
    )
}

export default SingleOrder