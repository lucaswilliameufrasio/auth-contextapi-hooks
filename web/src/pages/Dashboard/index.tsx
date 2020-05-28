import React from "react";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 10 }}>Dashboard</h1>
      <p>Olá, {user?.name}</p>
      
    </div>
  );
};

export default Dashboard;
