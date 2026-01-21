import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GroupDetails = () => {
    const { id } = useParams();
    const [group, setGroup] = useState(null);

    useEffect(() => {
        fetch(`https://hobby-hub-server-psi.vercel.app/hobby/${id}`)
            .then(res => res.json())
            .then(data => setGroup(data));
    }, [id]);

    if (!group) return <p>Loading...</p>;

    return (
        <div className='bg-[#F8EDE3]'>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto p-6">
                <img src={group.imageUrl} alt={group.groupName} className="w-full h-64 object-cover rounded" />
                <h2 className="text-3xl font-bold mt-4">{group.groupName}</h2>
                <p className="mt-2 text-gray-600">{group.hobbyCategory}</p>
                <p className="mt-2">{group.description}</p>
                <p className="mt-2 font-medium">Location: {group.location}</p>
                <p className="mt-2 font-medium">Max Members: {group.maxMembers}</p>
                <p className="mt-2 font-medium">Start Date: {group.startDate}</p>
                <Link to='/allGroups'>
                    <button className="mt-6 btn bg-[#987070] text-white hover:bg-[#944E63]">Join Group</button>
                </Link>


            </div>
            <Footer></Footer>
        </div>

    );
};

export default GroupDetails;

