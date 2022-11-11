import React from "react";
import DetailedView from "./DetailedView";

function Categories({data}) {

    const beer = data.filter((item) => {
        if (item.category_name === "beer") {
        <DetailedView key={item.id} name={item.name} category_name={item.category_name} price={item.price} image={item.image} quantity={item.quantity} description={item.description}/>
    }
    })

    const wine = data.filter((item) => {
        if (item.category_name === "wine") {
        <DetailedView key={item.id} name={item.name} category_name={item.category_name} price={item.price} image={item.image} quantity={item.quantity} description={item.description}/>
    }
    })
     
     const vodka = data.filter((item) => {
        if (item.category_name === "vodka") {
        <DetailedView key={item.id} name={item.name} category_name={item.category_name} price={item.price} image={item.image} quantity={item.quantity} description={item.description}/>
    }
    })

    return (
        <div>
            {beer}
            {wine}
            {vodka}
        </div>
    )
}

export default Categories;