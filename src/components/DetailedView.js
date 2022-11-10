import React from "react";

function DetailedView({name, category_name, price, description, image, quantity }) {
    return (
        <div>
            <img src={image}/>
            <p>{name}</p>
            <p>{category_name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{quantity}</p>
            <button></button>

        </div>
    )
}

export default DetailedView;