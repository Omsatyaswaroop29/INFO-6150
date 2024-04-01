import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Home = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser}/>
      <Card
        header={"Welcome to Codecraft"}
        cardContent={
          "At CodeCraft Solutions, we transform ideas into powerful software solutions. As a premier software development company, we specialize in crafting tailored applications that drive innovation and empower businesses to thrive in the digital era."
        }
      />
    </div>
  );
};

export default Home;
