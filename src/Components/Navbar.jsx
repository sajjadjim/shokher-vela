import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../Context/AuthProvider';
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdContactSupport, MdContacts, MdOutlineSupportAgent } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('Logged out'))
            .catch((err) => console.error(err));
    };


    const getLinkClass = ({ isActive }) => {
        const commonStyles = "px-3 py-2 rounded-md flex items-center gap-2 text-base font-medium transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-black hover:scale-102";

        if (isActive) {
            // 2. Active State: Brand color text, Bold, Underline
            return `${commonStyles} text-black scale-102 font-bold border-b-2 border-l-1 border-[#3A0519]`;
        }
        
        // 3. Inactive State: Dark Red text
        return `${commonStyles} text-[#3A0519]`;
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Navbar Container */}
            <div className="navbar bg-brand shadow-sm p-3">

                {/* --- Mobile Start --- */}
                <div className="navbar-start">
                    <div className="dropdown md:hidden block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-[#3A0519]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {/* Mobile Links */}
                            <li><NavLink className={getLinkClass} to="/">Home</NavLink></li>
                            <li><NavLink className={getLinkClass} to="/allGroups">All Groups</NavLink></li>
                            <li><NavLink className={getLinkClass} to="/aboutUs">About us</NavLink></li>
                            <li><NavLink className={getLinkClass} to="/contact">Contact</NavLink></li>
                            <li><NavLink className={getLinkClass} to="/support">Support</NavLink></li>
                            {user && <li><NavLink className={getLinkClass} to="/dashBoard">DashBoard</NavLink></li>}
                        </ul>
                    </div>
                    
                    <div className="flex items-center">
                        <h2 className="text-[#3A0519] text-xl font-bold ml-2 hidden sm:block">Shokhen Vela</h2>
                        <img className="w-12 h-12 ml-2" src={logo} alt="Logo" />
                    </div>
                </div>

                {/* --- Desktop Center --- */}
                <div className="navbar-center hidden md:flex gap-1">
                    <NavLink to="/" className={getLinkClass}><FaHome /> Home</NavLink>
                    <NavLink to="/allGroups" className={getLinkClass}><FaUserGroup /> All Groups</NavLink>
                    <NavLink to="/aboutUs" className={getLinkClass}><MdContactSupport /> About us</NavLink>
                    <NavLink to="/contact" className={getLinkClass}><MdContacts /> Contact</NavLink>
                    <NavLink to="/support" className={getLinkClass}><MdOutlineSupportAgent /> Support</NavLink>
                    {user && <NavLink to="/dashBoard" className={getLinkClass}>DashBoard</NavLink>}
                </div>

                {/* --- End (User Profile) --- */}
                <div className="navbar-end flex items-center gap-4">
                    {!user ? (
                        <Link className="text-[#3A0519] border-2 border-[#3A0519] px-4 py-1 rounded-md text-lg font-bold hover:bg-[#3A0519] hover:text-white transition-colors duration-300" to="/login">
                            Login
                        </Link>
                    ) : (
                        <div className="flex items-center gap-4">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img src={user.photoURL || 'https://i.ibb.co/2n4d3kR/default-avatar.png'} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                            </div>
                            <button onClick={handleLogout} className="btn font-bold btn-sm btn-outline border-[#3A0519] text-[#3A0519] hover:bg-[#3A0519] hover:text-white">
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