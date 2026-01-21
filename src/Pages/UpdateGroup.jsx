import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const UpdateGroup = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [group, setGroup] = useState(null);

    useEffect(() => {
        fetch(`https://hobby-hub-server-psi.vercel.app/hobby/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Group not found or server error');
                }
                return res.json();
            })
            .then(data => setGroup(data))
            .catch(err => {
                console.error(err);
                Swal.fire('Error', 'Could not load group data', 'error');
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const updated = {
            groupName: form.groupName.value,
            hobbyCategory: form.hobbyCategory.value,
            location: form.location.value,
            maxMembers: form.maxMembers.value,
            startDate: form.startDate.value,
            imageUrl: form.imageUrl.value,
            description: form.description.value,
        };

        fetch(`https://hobby-hub-server-psi.vercel.app/hobby/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire('Updated!', 'Group has been updated.', 'success');
                navigate('/myGroups');
            });
    };

    if (!group) return <p>Loading...</p>;

    return (
        <div className='bg-[#F8EDE3]'>
            <Navbar></Navbar>
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Update Group</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input defaultValue={group.groupName} name="groupName" className="input w-full" />
                <input defaultValue={group.hobbyCategory} name="hobbyCategory" className="input w-full" />
                <input defaultValue={group.location} name="location" className="input w-full" />
                <input defaultValue={group.maxMembers} name="maxMembers" className="input w-full" />
                <input defaultValue={group.startDate} name="startDate" className="input w-full" type="date" />
                <input defaultValue={group.imageUrl} name="imageUrl" className="input w-full" />
                <textarea defaultValue={group.description} name="description" className="textarea w-full" />

                <input readOnly value={user.displayName} className="input w-full bg-gray-100" />
                <input readOnly value={user.email} className="input w-full bg-gray-100" />

                <button className="btn bg-[#987070] text-white hover:bg-[#944E63]">Update</button>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default UpdateGroup;
