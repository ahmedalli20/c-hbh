import React from 'react'

function CheckoutForm() {
    return (
        <form>
            <h5 className='text-start'>Billing Address</h5>
            <div className='d-flex justify-content-start align-items-start flex-wrap'>
                <div className='p-1'>
                    <p className='text-start mb-0'>First Name</p>
                    <div className="input-group mb-3" >
                        <input type="text" className="form-control"
                            placeholder="First name" aria-label="first-name" aria-describedby="basic-addon1"
                            style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                        />
                    </div>
                </div>
                <div className='p-1'>
                    <p className='text-start mb-0'>Last Name</p>
                    <div className="input-group mb-3" >
                        <input type="text" className="form-control"
                            placeholder="Last Name" aria-label="last-name" aria-describedby="basic-addon1"
                            style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                        />
                    </div>
                </div>

            </div>
            <p className='text-start mb-0'>Username</p>
            <div className="input-group mb-3" >
                <div className="input-group-prepend">
                    <span className="input-group-text at-sign" id="basic-addon1" style={{ background: "#800000", color: '#f2f2f2', borderRadius: 'none' }}>@</span>
                </div>
                <input type="text" className="form-control"
                    placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                    style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                />
            </div>

            <div className="form-group mb-2">
                {/* <label htmlFor="exampleFormControlInput1" className='text-start'>Email address</label> */}
                <p className='text-start mb-0'>Email address</p>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                />
            </div>

            <div className='p-2'>
                <p className='text-start mb-0'>Address</p>
                <div className="input-group mb-3 number-input">
                    <input type="text" className="form-control number-input"
                        placeholder="House 404, Apartment NoJinx, 101 Muhuri Rd., Nairobi" aria-label="first-name" aria-describedby="basic-addon1"
                        style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                    />
                </div>
            </div>

            <div className='p-2'>
                <p className='text-start mb-0'>Mpesa No.</p>
                <div className="input-group mb-3 number-input">
                    <input type="text" className="form-control number-input"
                        placeholder="+254 72310103" aria-label="first-name" aria-describedby="basic-addon1"
                        style={{ backgroundColor: '#F5AF0B', color: '#181818' }}
                    />
                </div>
            </div>

            <button className='m-3' type='submit' style={{
                width: '300px',
                height: '50px',
                border: 0,
                borderRadius: '5px',
                color: '#f2f2f2',
                backgroundColor: 'maroon'
            }}>
                Pay
            </button>

        </form>
    )
}

export default CheckoutForm