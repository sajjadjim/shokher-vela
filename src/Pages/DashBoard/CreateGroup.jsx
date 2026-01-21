import React, { useContext } from 'react';
// import Navbar from '../Components/Navbar';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../../Components/Navbar';


const CreateGroup = () => {
    const { user } = useContext(AuthContext)
    const handleCreateGroup = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const newHobby = Object.fromEntries(formData.entries())
        console.log(newHobby)

        //send data to the db
        fetch('https://hobby-hub-server-psi.vercel.app/hobby', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHobby)
        })
            .then(res => res.json())
            .then(data => {
                console.log('hobby added successfully', data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your group has been created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }
    return (
        <div className=''>
            
            <div className='max-w-7xl mx-auto pb-30 pt-10'>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#3A0519]">Create a New Hobby Group</h1>
                    <p className="text-gray-600 mt-4">
                        Share your passion with others by starting a new group. Just fill in the details below to get started.
                    </p>
                </div>

                <form onSubmit={handleCreateGroup} className="space-y-6 bg-[#DBB5B5] p-8 rounded shadow-md pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="groupName" type="text" placeholder="Group Name" className="input input-bordered w-full" required />
                        <select name="hobbyCategory" className="select select-bordered w-full" required>
                            <option value=''>  Hobby Category</option>
                            <option>Drawing & Painting</option>
                            <option>Photography</option>
                            <option>Video Gaming</option>
                            <option>Fishing</option>
                            <option>Running</option>
                            <option>Cooking</option>
                            <option>Reading</option>
                            <option>Writing</option>
                        </select>
                        <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered w-full" required />
                        <input name="maxMembers" type="number" placeholder="Max Members" className="input input-bordered w-full" required />
                        <input name="startDate" type="date" className="input input-bordered w-full" required />
                        <input name="imageUrl" type="text" placeholder="Image URL" className="input input-bordered w-full" required />
                        <input name="userName" type="text" readOnly value={user?.displayName || ''} className="input input-bordered w-full bg-gray-100" />
                        <input name="userEmail" type="email" readOnly value={user?.email || ''} className="input input-bordered w-full bg-gray-100" />

                    </div>
                    <textarea name="description" className="textarea textarea-bordered w-full mt-4" placeholder="Group Description" rows="4" required></textarea>
                    <div className="text-center">
                        <button type="submit" className="btn border-none bg-[#987070] text-white hover:bg-[#944E63]">Create Group</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default CreateGroup;