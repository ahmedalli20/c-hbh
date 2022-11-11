import '../assets/LoginForm.css'

function LoginForm(){

    // const handleLogin = () => {
    //     alert("Hello, World!!")
    // }

    function handleLogin(event){
        event.preventDefault();
        fetch("http://localhost:9296/customers")
        .then(res => res.json())
        .then(data => console.log(data.map(customer => console.log(customer.user_name))))
        console.log(event.target.username.value)
    }

    return(
        <>
        <div className='form-container'>
            <div className='form-img'>
                <img src='https://www.thewhiskeyshelf.com/wp-content/uploads/2019/04/EHT-Single-Barrel-Front-Compressed.jpg'/>
            </div>
            <div className='form-details'>
                <h2 className='text-center text-white'>Login</h2>
                <p className='text-center text-white'>Welcome Back!</p>
                <form className="forms" onSubmit={handleLogin}>
                        <div className="col-md-12 mb-3">
                            <label
                            for="inputUsername"
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
                            for="inputPassword"
                            className="form-label text-white">
                                Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            width="50px"
                            />
                        </div>
                        <button
                        type="submit"
                        className="submit-btn">
                            Log In
                        </button>
                </form>
                    <p className="mt-2 text-white">Don't have an account? <span><a href="/">Sign Up</a></span> Here</p>
            </div>
        </div>
        </>
    )
}

export default LoginForm;