import '../assets/LoginForm.css'
import { useNavigate, Link } from "react-router-dom";

function LoginForm() {

    // const handleLogin = () => {
    //     alert("Hello, World!!")
    // }
    const navigate = useNavigate()

    function handleLogin(event) {
        event.preventDefault();
        fetch("http://localhost:9297/customers")
            .then(res => res.json())
            .then(data => {
                const user = data.find(customer => customer.user_name === event.target.username.value && customer.password_digest === event.target.password.value)
                console.log(user)
                if (user) {
                    navigate("/dashboard")
                }
                else {
                    alert("Wrong password or username")
                }


            })
    }

    return (
        <>
            <div className='form-container container-fluid d-flex justify-content-between align-items-center p-0'>
                <div className='form-img d-none d-sm-none d-md-block'>
                    {/* <img src={image} height={400}/> */}
                    tips
                </div>
                <div className="form-details container d-flex justify-content-center align-items-center">
                    <div className=''>
                        <h2 className='text-center text-white'>Login</h2>
                        <p className='text-center text-white'>Welcome Back!</p>
                        <form className="forms" onSubmit={handleLogin}>
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
                                        <input className="form-control password" id="username" name="username" type="text" />
                                    </div>
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
                                            className="form-control password"
                                            id="inputPassword"
                                            name="password"
                                            width="50px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="submit-btn">
                                Log In
                            </button>
                        </form>
                        <p className="mt-5 text-white">Don't have an account? <span><Link to="/signup">Sign Up</Link></span> Here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;