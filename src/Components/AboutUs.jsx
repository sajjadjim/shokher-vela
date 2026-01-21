import React from 'react';
import { FaUsers, FaPaintBrush, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* --- Hero Section --- */}
      <div className="bg-secondary-color py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Shokher Vela</h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          "Bringing people together through shared passions."
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* --- Who We Are --- */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#3A0519] mb-6 border-l-4 border-[#3A0519] pl-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Shokher Vela</strong> is a dynamic online platform created with one simple vision: to bridge the gap in a digital world by fostering genuine human connection. Whether you're a creative soul, a curious learner, or simply someone who loves trying new things, Shokher Vela is your space to meet, grow, and collaborate with like-minded individuals.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
              We believe hobbies are more than just pastimes — they are expressions of who we are. They spark joy, encourage exploration, and foster friendships that last a lifetime.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* You can replace this placeholder with an actual image later */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-[#3A0519] h-40 w-40">
                    <FaPaintBrush className="text-4xl mb-2" />
                    <span className="font-bold">Creativity</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-[#3A0519] h-40 w-40 mt-8">
                    <FaUsers className="text-4xl mb-2" />
                    <span className="font-bold">Community</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-[#3A0519] h-40 w-40 -mt-8">
                    <FaHandHoldingHeart className="text-4xl mb-2" />
                    <span className="font-bold">Passion</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-[#3A0519] h-40 w-40">
                    <FaGlobe className="text-4xl mb-2" />
                    <span className="font-bold">Connection</span>
                </div>
            </div>
          </div>
        </div>

        {/* --- What You Can Do --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3A0519]">Empowering Your Passions</h2>
            <p className="text-gray-600 mt-2">Discover how Shokher Vela helps you connect and grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-2xl text-[#3A0519]" />
              </div>
              <h3 className="text-xl font-bold text-[#3A0519] mb-3">Join Communities</h3>
              <p className="text-gray-600">
                From photography and painting to tech tinkering and gaming — find groups that match your niche interests instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <FaPaintBrush className="text-2xl text-[#3A0519]" />
              </div>
              <h3 className="text-xl font-bold text-[#3A0519] mb-3">Create Groups</h3>
              <p className="text-gray-600">
                Have a unique hobby? Create your own group, organize meetups, share resources, and lead a community of your own.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <FaHandHoldingHeart className="text-2xl text-[#3A0519]" />
              </div>
              <h3 className="text-xl font-bold text-[#3A0519] mb-3">Inclusive Space</h3>
              <p className="text-gray-600">
                A safe, fun environment open to all—whether you're an expert or a beginner. Everyone has something valuable to share.
              </p>
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="bg-secondary-color rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Find Your Tribe?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join Shokher Vela today. It's free, inclusive, and waiting for someone just like you.
          </p>
          <div className="relative z-10 flex justify-center gap-4">
            <Link to="/allGroups" className="bg-white text-[#3A0519] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Explore Groups
            </Link>
            <Link to="/contact" className="border-1 border-black transition-all duration-300  px-8 py-3 rounded-full font-bold hover:bg-white hover:border-0 hover:text-[#3A0519]">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;