import React from "react";
import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
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
      <h1 style={{ margin: 10 }}>Bem vindo</h1>
      <p>É necessário estar autenticado para utilizar a aplicação</p>
      
    </div>
  );
};

export default Home;
