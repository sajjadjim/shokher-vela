
import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <span className="loading loading-ball loading-xl"></span>;

  if (!user) {
    return  <Spinner> <Navigate to="/login" state={{ from: location }} /></Spinner> ;
  }

  return children;
};

export default PrivateRoute;

