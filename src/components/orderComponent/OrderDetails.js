import React, {useContext, useEffect} from 'react';
import SingleOrder from './SingleOrder';
import Total from './Total';
import NavbarLinks from '../navigation/NavbarLinks';
import Navbar from '../navigation/NavBar';
import Footer from '../navigation/Footer';
import { Link } from 'react-router-dom';
import { CartContext } from '../dashboardComponents/CartContext';


function OrderDetails() {
    const {cart, setCart} = useContext(CartContext);
    const styles={
        backgroundColor: "white", 
        height: '80vh',
        borderRadius: 10,
    }
    // to be replaced with concrete data
    let priceList = [];
    cart.map(item=>  priceList.push(item.price))
    const total = priceList.reduce((prev, current) => current + prev)
    return (
        <>
        <Navbar />
        <NavbarLinks />
        <div className='container' style={styles}>
            <h5 className='text-start p-3'>
                Order Details
            </h5>

            <div className='container d-flex justify-content-center align-items-center flex-column'>
                {
                    cart ?
                    cart.map(singleOrder=> {
                        return <SingleOrder key={singleOrder.id} singleOrder={singleOrder}/>
                    })
                    :
                    "No orders yet"
                }
                

                <Total total={total} />
                <Link to='/checkout'>
                <button className='m-3' style={{width: '300px', height: '50px', border: 0, borderRadius: '5px',color: '#f2f2f2', backgroundColor: 'maroon'}}>Checkout</button>
                </Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default OrderDetails