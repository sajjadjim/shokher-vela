import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center text-[#3A0519] mb-8">Contact Us</h2>

            <h3 className="text-2xl font-bold text-gray-700 mb-4  text-center">
                Have a question, suggestion?
            </h3>

            <p className="text-lg text-gray-700 mb-8 text-justify">
                Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6 bg-white shadow-md rounded-lg p-8">
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A0519]"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Your message here..."
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A0519]"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-[#3A0519] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#56132c] transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;

