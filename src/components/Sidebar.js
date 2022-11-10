import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <nav>
          <NavLink
          to={"/Brandy"}
          activeStyle={{color: "cultured"}}
          >
            Brandy
          </NavLink>

          <NavLink
          to={"/Vodka"}
          activeStyle={{color: "cultured"}}
          >
            Vodka
          </NavLink>

          <NavLink
          to={"/Gin"}
          activeStyle={{color: "cultured"}}
          >
            Gin
          </NavLink>

          <NavLink
          to={"/Wines"}
          activeStyle={{color: "cultured"}}
          >
            Wines
          </NavLink>

          <NavLink
          to={"/Beers"}
          activeStyle={{color: "cultured"}}
          >
            Beers
          </NavLink>

          <NavLink
          to={"/VIP Drinks"}
          activeStyle={{color: "cultured"}}
          >
            VIP Drinks
          </NavLink>

          <NavLink
          to={"/Lewa ulale-s"}
          activeStyle={{color: "cultured"}}
          >
            Lewa ulale-s
          </NavLink>

       </nav>

    )
}

export default Sidebar;