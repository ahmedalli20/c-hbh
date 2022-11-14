import React, {useState, useEffect} from "react";
import Categories from "./Categories";

function AllCategories() {
    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:9296/products')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 

    return (
        <div>
            <Categories data={data}/>
        </div>
    )
}

export default AllCategories