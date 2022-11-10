import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <nav>

          <NavLink
          to={"/vodka"}
          activeStyle={{color: "cultured"}}
          >
            Vodka
          </NavLink>

          <NavLink
          to={"/wines"}
          activeStyle={{color: "cultured"}}
          >
            Wines
          </NavLink>

          <NavLink
          to={"/beers"}
          activeStyle={{color: "cultured"}}
          >
            Beers
          </NavLink>


       </nav>

    )
}

export default Sidebar;