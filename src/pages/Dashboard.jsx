import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const navigate = useNavigate();

    function reDirect(){
        console.log('redirect this page')
        navigate('/')
    }
    

  return (
    <>
      <h1
        className="logout"
        onClick={() => {
          console.log("Logout this page");
          reDirect();
        }}
      >
        Logout
      </h1>
    </>
  );
};

export default Dashboard;
