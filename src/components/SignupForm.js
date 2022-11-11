import { useState } from 'react';
import './SignupForm.css';
import {Link, useNavigate} from 'react-router-dom'

function SignupForm(){
    // const handleSignin = (event) => {
    //     event.preventDefault();
    //     alert("Submitted!")
    // }
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user_name:"",
        email: "",
        password_digest: ""
        })

    function handleSignin(event){
        event.preventDefault();
        console.log(formData)
        // alert("Submitted")
        fetch("http://localhost:9296/customers",{
            headers: {"Content-Type": "application/json"},
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
        }).then(()=> navigate("/login"))
    }
    return(
        <>
        <div className='form-container'>
            <div className='form-img'>
                <img src='https://www.thewhiskeyshelf.com/wp-content/uploads/2019/04/EHT-Single-Barrel-Front-Compressed.jpg'/>
            </div>
            <div className='form-details'>
                <h2 className='text-center text-white'>Sign Up</h2>
                {/* <p className='text-center text-white'>Welcome Back!</p> */}
                <form className="forms" onSubmit={handleSignin}>
                        <div className="col-md-12 mb-3">
                            <label
                            htmlFor="inputUsername"
                            className="form-label text-white">
                                Username
                            </label>
                            <input
                            type="text"
                            className="form-control col-md-6"
                            id="inputUsername"
                            onChange={(event) => setFormData({...formData, user_name:event.target.value})}
                            value={formData.user_name}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label
                            htmlFor="inputEmail"
                            className="form-label text-white">
                                Email
                            </label>
                            <input
                            type="email"
                            className="form-control col-md-6"
                            id="inputEmail"
                            onChange={(event) => setFormData({...formData, email:event.target.value})}
                            value={formData.email}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label
                            htmlFor="inputPassword"
                            className="form-label text-white">
                                Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            width="50px"
                            onChange={(event) => setFormData({...formData, password_digest:event.target.value})}
                            value={formData.password_digest}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label
                            htmlFor="inputRepeatPassword"
                            className="form-label text-white">
                                Repeat Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="inputPassword2"
                            width="50px"
                            // onChange={(event) => event.target.value}
                            // value={event.target.value}
                            />
                        </div>
                        <button
                        type="submit"
                        className="submit-btn">
                            Sign Up
                        </button>
                </form>
                <p className="mt-2 text-white">Already have an account <span><Link to="/login">Log In</Link></span></p>
            </div>
        </div>
        </>
    )
}

export default SignupForm