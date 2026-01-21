import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from '../../Components/FeaturedCard';

const fetchHobbies = async (searchTerm, sortOrder) => {

    const res = await fetch(`https://hobby-hub-server-psi.vercel.app/hobby?sort=${sortOrder}&search=${searchTerm}`);

    return res.json();
};



const AllGroup = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');


    const { data: hobbies = [], loading } = useQuery({
        queryKey: ['hobbies', searchTerm, sortOrder],
        queryFn: () => fetchHobbies(searchTerm, sortOrder),
        keepPreviousData: true,
    });



    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#3A0519]">All Hobby Groups</h2>

            {/* Search & Sort Controls */}
            <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <label htmlFor="search" className="sr-only">Search hobbies</label>
                <input
                   
                    type="text"
                    placeholder="Search hobbies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full md:w-1/3"
                />

                <div className="flex items-center space-x-2">
                    <label className="font-medium">Sort:</label>
                    <select
                        // id="sort"
                        value={sortOrder}
                        onChange={(e) => {
                            console.log("New sortOrder:", e.target.value);
                            setSortOrder(e.target.value)
                        }}
                        className="border px-3 py-1 rounded"
                    >
                        <option value="asc">Ascending </option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            {/* Hobby List */}
            {hobbies.length === 0 ? (
                <div className="text-center my-12">No hobby groups found.</div>
            ) : (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {hobbies.map((hobby) => (
                        <FeaturedCard key={hobby._id} hobby={hobby} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllGroup;

