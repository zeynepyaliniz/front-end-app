import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute =() => {
    const jwtToken = localStorage.getItem("jwtToken")
    debugger
    return jwtToken ? <Outlet /> : <Navigate to="/signIn" />;
}
export default PrivateRoute;