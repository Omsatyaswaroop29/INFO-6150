import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Contact = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser} />
      <Card
        header={"Contact OGS"}
        cardContent="
        For any information 
        Contact us at:
        857-364-1519
        "
      />
    </div>
  );
};

export default Contact;
