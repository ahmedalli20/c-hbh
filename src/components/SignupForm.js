import { useState } from 'react';
// import './SignupForm.css';
import '../assets/LoginForm.css'
import { Link, useNavigate } from 'react-router-dom'

function SignupForm() {
    // const handleSignin = (event) => {
    //     event.preventDefault();
    //     alert("Submitted!")
    // }
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user_name: "",
        email: "",
        password_digest: "",
        repeatpassword: ""
    })

    function handleSignin(event) {
        event.preventDefault();
        console.log(formData)
        // alert("Submitted")

        if (formData.password_digest !== formData.repeatpassword) {
            alert("Password doesnt match")
            return
        }


        fetch("http://localhost:9297/customers", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setFormData({
                    user_name: "",
                    email: "",
                    password_digest: ""
                })
            }).then(() => navigate("/"))
    }
    return (
        <>
            <div className='form-container d-flex justify-content-center align-items-center'>

                <div className='form-details container d-flex justify-content-center align-items-center'>
                    <div className=''>
                        <h2 className='text-center text-white'>Sign Up</h2>
                        {/* <p className='text-center text-white'>Welcome Back!</p> */}
                        <form className="forms" onSubmit={handleSignin}>
                            <div className="col-md-12 mb-3">
                                <label
                                    htmlFor="inputUsername"
                                    className="form-label text-white">
                                    Username
                                </label>

                            </div>


                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                    <label className="control-label login" htmlFor="username">
                                        Username
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon tips-icon px-2">
                                            {/* @ */}
                                            <i className='bx bxs-envelope bx-sm pt-2 '></i>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control col-md-6"
                                            id="inputUsername"
                                            onChange={(event) => setFormData({ ...formData, user_name: event.target.value })}
                                            value={formData.user_name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                    <label className="control-label login" htmlFor="email">
                                        Email
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon tips-icon px-2">
                                            {/* @ */}
                                            <i className='bx bxs-envelope bx-sm pt-2 '></i>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control col-md-6"
                                            id="inputEmail"
                                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                            value={formData.email}
                                        />                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                    <label className="control-label login" htmlFor="inputPassword">
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon tips-icon px-2">
                                            {/* @ */}
                                            <i className='bx bxs-lock-alt bx-sm pt-2 '></i>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword"
                                            width="50px"
                                            onChange={(event) => setFormData({ ...formData, password_digest: event.target.value })}
                                            value={formData.password_digest}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                    <label className="control-label login" htmlFor="repeatPassword">
                                        Repeat Password
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon tips-icon px-2">
                                            {/* @ */}
                                            <i className='bx bx-lock-alt bx-sm pt-2 '></i>
                                        </div>
                                        <input
                                    type="password"
                                    className="form-control"
                                    name='repeatpassword'
                                    id="inputPassword2"
                                    width="50px"
                                    onChange={(event) => setFormData({ ...formData, repeatpassword: event.target.value })}
                                    value={formData.repeatpassword}
                                />
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                className="submit-btn">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-2 text-white">Already have an account <span><Link to="/">Log In</Link></span></p>
                    </div>
                </div>
                <div className='form-image'>
                    {/* <img src='https://www.thewhiskeyshelf.com/wp-content/uploads/2019/04/EHT-Single-Barrel-Front-Compressed.jpg' /> */}
                </div>
            </div>
        </>
    )
}

export default SignupForm