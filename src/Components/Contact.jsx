import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
                
                {/* --- Left Side: Contact Info (Brand Color) --- */}
                <div className="bg-brand text-white p-10 md:w-2/5 flex flex-col justify-between relative">
                    {/* Decorative Circle (Optional Visual) */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className=" text-sm mb-8 leading-relaxed">
                            Have questions about joining a group or starting your own? We're here to help! Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6 text-black">
                            <div className="flex items-start space-x-4">
                                <FaEnvelope className="mt-1 text-xl opacity-80" />
                                <div>
                                    <h3 className="font-semibold text-sm opacity-70 uppercase tracking-wider">Email</h3>
                                    <p className="text-black">support@shokhervela.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <FaPhoneAlt className="mt-1 text-xl opacity-80" />
                                <div>
                                    <h3 className="font-semibold text-sm opacity-70 uppercase tracking-wider">Phone</h3>
                                    <p className="text-black">+880 1234 567 890</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <FaMapMarkerAlt className="mt-1 text-xl opacity-80" />
                                <div>
                                    <h3 className="font-semibold text-sm opacity-70 uppercase tracking-wider">Location</h3>
                                    <p className="text-black">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12">
                        <h3 className="font-semibold text-sm opacity-70 uppercase tracking-wider mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Right Side: The Form --- */}
                <div className="p-10 md:w-3/5 bg-white">
                    <h3 className="text-2xl font-bold text-[#3A0519] mb-6">Send us a Message</h3>
                    
                    <form className="space-y-6">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="write your name"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="example@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="How can we help?"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                placeholder="Write your thoughts here..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3A0519] focus:ring-1 focus:ring-[#3A0519] transition-colors resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-brand text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-[#58102a] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;