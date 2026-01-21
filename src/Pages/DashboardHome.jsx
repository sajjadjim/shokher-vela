import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DashboardOverview from "./DashboardOverview";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hobby-hub-server-psi.vercel.app/hobby")
      .then(res => res.json())
      .then(data => {
        setAllGroups(data);
        if (user?.email) {
          const myData = data.filter(g => g.userEmail === user.email);
          setMyGroups(myData);
        }
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <DashboardOverview
      allGroups={allGroups.length}
      myGroups={myGroups.length}
    />
  );
};

export default DashboardHome;
