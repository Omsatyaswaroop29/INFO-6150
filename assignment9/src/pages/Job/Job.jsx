import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./job.css";
const Job = ({ setUser }) => {
  const jobs = [
    {
      id: 1,
      title: "Deveops enginner",
      description: "DevOps engineers focus on the intersection of software development and IT operations. They aim to automate and streamline the software delivery and infrastructure management processes.",
    },
    {
      id: 2,
      title: "Software Engineer/Developer",
      description: "Software engineers design, develop, test, and maintain software systems. They work with programming languages, frameworks, and tools to create applications and solutions.",
    },
    {
      id: 3,
      title: "Database Administrator (DBA)",
      description: "Database administrators design, implement, and maintain databases. They manage data storage, access, and security, and ensure that databases meet the performance needs of applications.",
    },
    {
      id: 4,
      title: "Data Scientist",
      description: "Data scientists analyze and interpret complex data sets to inform business decision-making. They use statistical methods, machine learning, and data visualization techniques to extract insights from data.",
    },
  ];
  return (
    <div className="container">
      <Navbar setUser={setUser} />
      <div className="jobs_container">
        {jobs.map((job) => (
          <Card
            key={job.id}
            header={job.title}
            cardContent={job.description}
            isShowButton
          />
        ))}
      </div>
    </div>
  );
};

export default Job;
