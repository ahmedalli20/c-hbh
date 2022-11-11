import React from "react";
import DetailedView from "./DetailedView";

function SomeAlcohol({data}){
    const some = data.slice(0,1)

    const alcohol = some.map((item) => <DetailedView key={item.id} name={item.name} category_name={item.category_name} price={item.price} image={item.image} quantity={item.quantity} description={item.description}/>)

    return (
        <div>
            {alcohol}
        </div>
    )

}

export default SomeAlcohol