import React, { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout= ()=>{ localStorage.clear('userDetails') }

//   const auth = localStorage.getItem("userDetails");
//   useEffect(() => {
//     if (!auth) {
//       navigate("/login-page");
//     }
//   }, []);
  
//   useEffect(() => {
//     if (!auth) {
//       navigate("/login-page");
//     }
//   }, [auth]);
  return <div>admin...........................</div>;
};

export default AdminPage;
