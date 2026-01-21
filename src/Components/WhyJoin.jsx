import React from 'react';

const WhyJoin = () => {
    return (
        <div className=''>
            <section className="my-10 text-center  text-[#3A0519]">
                <h2 className="text-3xl  font-bold text-[#3A0519] mb-10">Why Join Shokher Vela?</h2>
                <div className="grid md:grid-cols-4 w-10/12 lg:mx-auto gap-6 place-items-center md:mx-70">
                    <div className="btn-card-join ">
                        <h3 className="text-xl  font-semibold">👥 Meet New People</h3>
                        <p>Connect with locals who share your passions.</p>
                    </div>
                    <div className="btn-card-join">
                        <h3 className="text-xl font-semibold">🎯 Explore Your Interests</h3>
                        <p>Join groups in art, fitness, reading, and more.</p>
                    </div>
                    <div className="btn-card-join">
                        <h3 className="text-xl font-semibold">🌍 Local Communities</h3>
                        <p>Discover what's happening around you.</p>
                    </div>
                    <div className="btn-card-join">
                        <h3 className="text-xl font-semibold">✍️ Create Your Group</h3>
                        <p>Start something amazing and lead your own group.</p  >
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyJoin;