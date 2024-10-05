import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state is not authenticated
    // const navigate = useNavigate();
  
    // if (!isAuthenticated) {
    //   return <Login onLogin={() => setIsAuthenticated(true)} />;
    // }

    return <Component />;

};

export default ProtectedRoute;