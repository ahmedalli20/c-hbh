import React from "react";
import BeerImage from "../assets/images/budweiser_small.png"
import Footer from "./navigation/Footer";
import Navbar from "./navigation/NavBar";
import NavbarLinks from "./navigation/NavbarLinks";
import {useParams} from 'react-router-dom';

function DetailedView({ products }) {
    const {id} = useParams();
    const singleBeerItem = products.filter((product) => product.id == id)[0]
    console.log(singleBeerItem)

    return (
        <>
        <Navbar/>
        <NavbarLinks />
        <div className="container detail">
            <h4>Product Details</h4>
            <div className="d-flex justify-content-around align-items-center
" >
                <div className="beer-container d-flex justify-content-center ">
                    <img src={singleBeerItem.image_url} alt="beer" className="beer" />
                </div>
                <div className="details">
                    <p className="name">{singleBeerItem.name}</p>
                    <p className="category">Category:<span>{singleBeerItem.category_name}</span> </p>
                    <p className="stock">In stock</p>
                    <p className="quantity">{singleBeerItem.quantity} pcs left</p>
                    <p className="price">Ksh. {singleBeerItem.price}</p>
                    <h6>Description:</h6>
                    <p className="description">{singleBeerItem.description}</p>
                    <button className="buttons">Add to Cart</button>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default DetailedView;