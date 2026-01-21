
import React, { useContext } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../Context/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Logged out');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-[#DBB5B5] shadow-sm p-6 ">

                <div className="navbar-start">
                    <div className="dropdown text-[#3A0519]">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-10 mt-3 w-52 p-2 shadow text-[#3A0519] "
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allGroups">All Groups</Link></li>
                            <li><Link to="/aboutUs">About us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/support">Support</Link></li>
                            {user && (
                                <>
                                    <li><Link to="/dashBoard">DashBoard</Link></li>
                                    {/* <li><Link to="/myGroup">My Groups</Link></li> */}
                                </>
                            )}
                        </ul>
                    </div>
                    <h2 className="text-[#3A0519] text-xl font-bold ml-2">HobbyHub</h2>
                    <img className="w-12 h-12 ml-2" src={logo} alt="HobbyHub Logo" />
                </div>


                <div className="navbar-center space-x-4 text-[#3A0519] hidden md:flex">
                    <Link to="/">Home</Link>
                    <Link to="/allGroups">All Groups</Link>
                    <Link to="/aboutUs">About us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/support">Support</Link>
                    {user && (
                        <>
                           <Link to="/dashBoard">DashBoard</Link>
                            {/* <Link to="/myGroup">My Groups</Link> */}
                        </>
                    )}
                </div>


                <div className="navbar-end flex items-center gap-4">

                    {!user ? (
                        <Link className="text-[#3A0519] text-xl font-bold" to="/login">Login</Link>
                    ) : (
                        <div className="flex items-center gap-4">

                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img
                                    src={user.photoURL || 'https://i.ibb.co/2n4d3kR/default-avatar.png'}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn font-bold btn-sm btn-outline border-[#3A0519] text-[#3A0519]"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


