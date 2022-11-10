import React from "react";

function DetailedView({name, category_name, price, description, image, quantity }) {
    return (
        <div className="detail">
            <h4>Product Details</h4>
            <img src={image}/>
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
    )
}

export default DetailedView;