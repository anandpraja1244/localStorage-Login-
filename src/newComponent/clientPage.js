import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const ClientPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const auth = localStorage.getItem("userDetails");
      if (!auth) {
        navigate("/login-page");
      }
    }, []);
    
    return (
        <div>
            calient................
        </div>
    );
}

export default ClientPage;
