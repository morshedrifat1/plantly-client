import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import LoadingSpiner from '../Components/LoadingSpiner';

const PrivateRoute = ({children}) => {
    const {user,loader} = use(AuthContext);
    const location = useLocation();
    if(loader){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;