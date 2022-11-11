import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLinks() {
    const links = {
        textDecoration: "none",
        color: '#f2f2f2',
        fontWeight: '500',
        fontSize: '18px'
    }
    return (
        <div className='d-flex justify-content-start align-items-center'>
            <div className='px-4 mt-2'>
                <Link to="/dashboard">
                    <h6 className='px-4' style={links}>Home</h6>
                </Link>

            </div>
        </div>
    )
}

export default NavbarLinks