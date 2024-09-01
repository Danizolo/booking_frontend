/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 13/07/2024 - 20:48:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/07/2024
    * - Author          : DHANUSH
    * - Modification    : 
**/

import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  try {
    let auth = localStorage.getItem("isAuthenticated");


    return auth ? <Outlet /> : <Navigate to="/" />;
  } catch (error) {}
};

export default ProtectedRoute;
