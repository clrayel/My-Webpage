import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  let projectList = [
    {
      title:
        "A Comparison of BERT and ChatGPT as Tools for Scientific Article Summarization",
      purpose: "2023 Special Project",
      description:
        "A Special Project comparing ChatGPT and BERT for scientific article summarization through automated and manual evaluation.",
    },
    {
      title: "KALATAS",
      purpose: "2021 General Weighted Average Verifier for UPLB",
      description:
        "CMSC 128 group project wherein I am a Team Leader and a Programmer of the Database team.",
    },
    {
      title: "Periodic Visionary",
      purpose: "2021 Science blog project",
      description:
        "SCI 10 Earth Science blog on the future of the elements of the periodic table web: https://periodicvisionary.wordpress.com/",
    },
    {
      title: "Deliverance",
      purpose: "2018 Grade 11 video game project",
      description:
        "Turn-based console video game built in C# - Incorporates heavy use of ASCII graphics and sound",
    },
  ];

  return (
    <div className="projects">
      <h1>Projects, Presentations, and Publications</h1>
      <hr />
      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard
            title={project.title}
            purpose={project.purpose}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
