import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        fetch('https://hobby-hub-server-psi.vercel.app/hobby')
            .then(res => res.json())
            .then(data => setHobbies(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="w-10/12 mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-10 text-center text-[#3A0519]">Featured Hobby Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.slice(0, 6).map(hobby => (
                    <FeaturedCard key={hobby._id} hobby={hobby} />
                ))}
            </div>
        </div>
    );
};

export default Featured;

