import React from "react";

const Home = ({ texto, titulo }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ color: "green" }}>{titulo}</h1>
      <span>{texto}</span>
    </div>
  );
};

export default Home;
