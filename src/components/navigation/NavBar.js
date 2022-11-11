import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({cart}) {
  const pill = {
    borderRadius: '50%',
    backgroundColor: 'red ',
    fontSize: '14px'

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between align-items-center px-5 flex-wrap">
      <div className="tips-logo">
        <h3 style={{ color: "#f2f2f2" }}>ti<span style={{ color: "#F5AF0B" }}>ps</span></h3>
      </div>
      <form className="my-2 my-lg-0 d-flex">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <div>
        <div className="cart">
        <NavLink
          to={"/orderdetails"}
          >
          <div style={{ color: "#f2f2f2" }}>
            <i className='bx bxs-cart bx-md' ></i>
            <sup><span className="badge badge-pill badge-danger custon-pill" style={pill}>{cart}</span></sup>
            <i className='bx bxs-user-circle bx-md mx-5'></i>
          </div>
          </NavLink>
        </div>


      </div>
    </nav>
  )
}

export default Navbar;