import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {


    const { signIn, googleLogIn } = useContext(AuthContext)
    const [error, setError] = useState(null)
    // console.log(signIn)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email, password)


        signIn(email, password)
            .then(res => {
                console.log('user created', res.user)

                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setError('Invalid password or email.Please try again.')
            })
    }

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const user = result.user
                console.log(user)

                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setError('Invalid email or password.Please try again.')
            })
    }
    return (
        <div className='bg-[#F8EDE3]'>
            <Navbar></Navbar>
            <div className='my-30 pb-20'>
                <div className="card bg-base-100 w-[400px] mx-auto shrink-0 shadow-2xl ">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login now!</h1>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Login</button>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black my-3 border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p>Didn't register? Please <Link to='/register'> <span className='text-red-400'>Register</span> Now </Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Login;