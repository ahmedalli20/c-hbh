import React, {useState, useEffect} from "react";
import AllCategories from "./AllCategories";
import Categories from "./Categories";
import SomeAlcohol from "./SomeAlcohol";
// import Sidebar from "./Sidebar";


function Home() {

    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:9296/products')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 


    return(
        <div>
            {/* <Sidebar/> */}
            {/* <Categories data={data}/> */}
            <SomeAlcohol data={data}/>       
            {/* <AllCategories/> */}
        </div>

    )
}

export default Home;