import React from "react";
// import { Route, Routes, Router } from "react-router-dom";
// import Home from "./Home";
import NavBar from "./NavBar";
// import Categories from "./Categories";


function LandingPage({data}) {

    return(
        <div>
            <NavBar />
        
            {/* <Routes>
                 <Route path="/categories" element = {<Categories data={data} />} />
                 <Route path="/Add_alcohol" element={<Add_alcohol/>} />
                 <Route path="/" element={<Home data={data}/>} />
            </Routes> */}
    
        </div>
    )
}

export default LandingPage;