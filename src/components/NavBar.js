import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
          <NavLink
          to={"/"}
          activeStyle={{color: "cultured"}}
          >
            Home
          </NavLink>

          <NavLink
          to={"/Categories"}
          activeStyle={{color: "cultured"}}
          >
            Categories
          </NavLink>

          <NavLink
          to={"/Add_alcohol"}
          activeStyle={{color: "cultured"}}
          >
            Add Alcohol
          </NavLink>

          <img src=""/>



       </nav>

    )
}

export default Navbar;