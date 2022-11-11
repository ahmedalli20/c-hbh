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
            <div className='form-container'>
                <div className='form-img'>
                    <img src='https://www.thewhiskeyshelf.com/wp-content/uploads/2019/04/EHT-Single-Barrel-Front-Compressed.jpg' />
                </div>
                <div className='form-details'>
                    <h2 className='text-center text-white'>Login</h2>
                    <p className='text-center text-white'>Welcome Back!</p>
                    <form className="forms" onSubmit={handleLogin}>
                        <div className="col-md-12 mb-3">
                            <label
                                htmlFor="inputUsername"
                                name="username"
                                className="form-label text-white">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control col-md-6"
                                name="username"
                                id="inputUsername"
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
                                name="password"
                                width="50px"
                            />
                        </div>
                        <button
                            type="submit"
                            className="submit-btn">
                            Log In
                        </button>
                    </form>
                    <p className="mt-2 text-white">Don't have an account? <span><Link to="/">Sign Up</Link></span> Here</p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;