import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';

const DashboardOverview = ({ allGroups = 0, myGroups = [] }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#3A0519] mb-1">Dashboard Overview</h1>
      <p className="text-gray-600 mb-8">
        Welcome back, <span className="font-semibold">{user?.displayName || "User"}</span>!
      </p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col items-center hover:shadow-md transition">
          <p className="text-gray-500">Total Groups</p>
          <p className="text-3xl font-bold text-[#3A0519]">{allGroups}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col items-center hover:shadow-md transition">
          <p className="text-gray-500">My Groups</p>
          <p className="text-3xl font-bold text-[#3A0519]">{myGroups.length}</p>
        </div>
      </div>

      {/* Recent Groups */}
      <div>
        <h2 className="text-xl font-semibold text-[#3A0519] mb-4">My Recent Groups</h2>
        {myGroups.length === 0 ? (
          <p className="text-gray-500">You haven't joined or created any groups yet.</p>
        ) : (
          <ul className="space-y-3">
            {myGroups.map((group) => (
              <li
                key={group._id}
                className="p-4 bg-white border rounded-lg hover:shadow-md hover:bg-gray-50 transition cursor-pointer"
              >
                <h3 className="font-semibold">{group.groupName}</h3>
                <p className="text-gray-500 text-sm">{group.hobbyCategory}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        <Link
          to="addGroup"
          className="inline-flex justify-center items-center bg-[#944E63] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-[#7a3f4f] transition"
        >
          + Add New Group
        </Link>
        <Link
          to="allGroup"
          className="inline-flex justify-center items-center bg-gray-200 font-medium px-5 py-2.5 rounded-lg hover:bg-gray-300 transition"
        >
          View All Groups
        </Link>
      </div>
    </div>
  );
};

export default DashboardOverview;


