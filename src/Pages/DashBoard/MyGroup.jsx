import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const MyGroup = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch('https://hobby-hub-server-psi.vercel.app/hobby')
                .then(res => res.json())
                .then(data => {
                    const myGroups = data.filter(group => group.userEmail === user.email);
                    setGroups(myGroups);
                });
        }
    }, [user]);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This will permanently delete the group!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#987070',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-server-psi.vercel.app/hobby/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(() => {
                        setGroups(groups.filter(g => g._id !== id));
                        Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
                    });
            }
        });
    };

    return (
        <div className='bg-[#F8EDE3]'>
            
            <div className="p-6 max-w-5xl mx-auto ">

                <h2 className="text-4xl font-bold mb-8 text-center">My Groups</h2>
                <table className="w-full text-left ">
                    <thead >
                        <tr className="border-b ">
                            <th>Group Name</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group) => (
                            <tr key={group._id} className="border-b hover:bg-gray-50">
                                <td>{group.groupName}</td>
                                <td>{group.hobbyCategory}</td>
                                <td>{group.location}</td>
                                <td className="space-x-2">
                                    <Link to={`/updateGroup/${group._id}`}>
                                        <button className="btn btn-sm bg-[#FBDB93]">Update</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(group._id)}
                                        className="btn btn-sm bg-[#AF3E3E] text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
          
        </div>
    );
};

export default MyGroup;
