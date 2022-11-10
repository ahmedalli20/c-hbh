import './SignupForm.css';

function SignupForm(){
    const handleSignin = () => {
        alert("Clicked!")
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
                <form className="forms">
                        <div className="col-md-12 mb-3">
                            <label
                            for="inputUsername"
                            className="form-label text-white">
                                Username
                            </label>
                            <input
                            type="text"
                            className="form-control col-md-6"
                            id="inputEmail"
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label
                            for="inputEmail"
                            className="form-label text-white">
                                Email
                            </label>
                            <input
                            type="email"
                            className="form-control col-md-6"
                            id="inputEmail"
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
                        <div className="col-md-12 mb-3">
                            <label
                            for="inputRepeatPassword"
                            className="form-label text-white">
                                Repeat Password
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
                        className="submit-btn" onClick={()=> handleSignin()}>
                            Log In
                        </button>
                </form>
                <p className="mt-2 text-white">Already have an account <span><a href="/">Sign Up</a></span></p>
            </div>
        </div>
        </>
    )
}

export default SignupForm