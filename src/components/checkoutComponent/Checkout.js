import React from 'react'

function Checkout() {
    const styles = {
        backgroundColor: "white",
        height: '80vh',
        borderRadius: 10,
    }
    // to be replaced with concrete data
    const beer = "Budweiser Root Beer";
    const price = 203.50;
    const pieces = 4091;
    const total = 5533.3;
    // to be replaced with concrete data
    return (
        <div className='container' style={styles}>
            <h5 className='text-start p-3'>
                Checkout
            </h5>

            {/* <h6 className='text-start'>Billing Address</h6> */}
            <div className='container d-flex justify-content-evenly align-items-center flex-column'>
                <form style={{ width: '100%' }}>
                    <h5 className='text-start'>Billing Address</h5>
                    <div className='d-flex justify-content-start align-items-start'>
                        <div className='p-1'>
                            <p className='text-start'>First Name</p>
                            <div className="input-group mb-3" >
                                <input type="text" className="form-control"
                                    placeholder="First name" aria-label="first-name" aria-describedby="basic-addon1"
                                    style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                                />
                            </div>
                        </div>
                        <div className='p-1'>
                            <p className='text-start'>Last Name</p>
                            <div className="input-group mb-3" >
                                <input type="text" className="form-control"
                                    placeholder="Last Name" aria-label="last-name" aria-describedby="basic-addon1"
                                    style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                                />
                            </div>
                        </div>

                    </div>
                    <p className='text-start'>Username</p>
                    <div className="input-group mb-3" >
                        <div className="input-group-prepend">
                            <span className="input-group-text at-sign" id="basic-addon1" style={{ background: "#800000", color: '#f2f2f2', borderRadius: 'none' }}>@</span>
                        </div>
                        <input type="text" className="form-control"
                            placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                            style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                        />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlInput1" className='text-start'>Email address</label> */}
                        <p className='text-start'>Email address</p>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Checkout