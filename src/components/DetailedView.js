import React from "react";
import BeerImage from "../assets/images/budweiser_small.png"
import Footer from "./navigation/Footer";
import Navbar from "./navigation/NavBar";
import NavbarLinks from "./navigation/NavbarLinks";

function DetailedView({ name, category_name, price, description, image, quantity }) {
    return (
        <>
        <Navbar/>
        <NavbarLinks />
        <div className="container detail">
            <h4>Product Details</h4>
            <div className="d-flex justify-content-around align-items-center
" >
                <div className="beer-container d-flex justify-content-center ">
                    <img src={BeerImage} alt="beer" className="beer" />
                </div>
                <div className="details">
                    <p className="name">{name}</p>
                    <p className="category">Category:<span>{category_name}</span> </p>
                    <p className="stock">In stock</p>
                    <p className="quantity">{quantity} pcs left</p>
                    <p className="price">Ksh. {price}</p>
                    <h6>Description:</h6>
                    <p className="description">{description}</p>
                    <button className="buttons">Add to Cart</button>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default DetailedView;