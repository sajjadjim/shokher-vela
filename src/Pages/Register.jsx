import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';
import Footer from '../Components/Footer';


const Register = () => {
    const navigate = useNavigate()
    const { createUser, setUser, googleLogIn } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photoUrl.value
        const pass = e.target.password.value
        console.log({ name, email, photo, pass }),
            setError(null)

        if (pass.length < 6) {
            return setError('Password must be at least 6 characters long.');
        }
        if (!/[A-Z]/.test(pass)) {
            return setError('Password must include at least one uppercase letter.');
        }
        if (!/[a-z]/.test(pass)) {
            return setError('Password must include at least one lowercase letter.');
        }

        createUser(email, pass)
            .then(result => {
                const user = result.user
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user)
                setUser(user)
                navigate('/login')

            })
            .catch(error => {
                console.log(error)
                setError('Please try Again!!')
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

        <div className='bg-[#F8EDE3] justify-center items-center '>
            <Navbar></Navbar>
            <div className="card bg-base-100  w-11/12 mx-auto mt-20 max-w-sm shrink-0 shadow-2xl mb-20 ">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <h2 className='text-3xl mb-4font-bold text-black text-center '>Register Now!!</h2>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoUrl' className="input" placeholder="Photo URL" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4 bg-base-200 border-none text-black my-2">Register</button>
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] my-2">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p>Already register? Please <Link to='/login'> <span className='text-blue-400'>Login</span> </Link> </p>
                    </form>
                </div>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Register;


