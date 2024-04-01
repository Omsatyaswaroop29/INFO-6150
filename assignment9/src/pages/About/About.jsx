import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./about.css";
const About = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser} />
      <Card
        header={"About"}
        cardContent={
          "Tech Innovators Inc. is a leading technology company specializing in [specific technology area or service. Established in 1990, we are at the forefront of [cutting-edge technologies or industry trends]. Our team of [number of experts] experts is dedicated to delivering innovative solutions that [solve specific industry challenges or meet market demands]. With a commitment to excellence, Tech Innovators Inc. focuses on [key areas such as software development, cloud solutions, cybersecurity, etc.]. Our collaborative approach and agile methodologies ensure that we stay adaptable in a rapidly evolving tech landscape. At Tech Innovators Inc., we pride ourselves on [unique aspects like a diverse team, commitment to sustainability, or community engagement]. Our mission is to [mission statement or primary goal], and we strive to empower businesses and individuals through transformative technology. Discover the future of technology with Tech Innovators Inc. - Where Innovation Meets Excellence."
        }
      />
    </div>
  );
};

export default About;
