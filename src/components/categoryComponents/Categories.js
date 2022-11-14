import React from 'react'

function Categories() {
    const links = {
        width: '100%',
        backgroundColor: "#800000",
        marginTop: '5px',
        textDecoration: 'none',
        color: '#f2f2f2'
    }
    return (
        <>
            <div>
                <p>
                    <a className="btn btn-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Categories
                    </a>
                </p>
                <div className="collapse" id="collapseExample" >
                    <div className="card card-body sticky" style={{backgroundColor: '#F5AF0B', width: '200px'}}>
                        <a href='#' style={links}>Vodca</a>
                        <a href='#'  style={links}>Rum</a>
                        <a href='#'  style={links}>Gin</a>
                        <a href='#'  style={links}>Wine</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories