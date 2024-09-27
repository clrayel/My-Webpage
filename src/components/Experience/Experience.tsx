import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="experience div" id="experience">
      <h1 className="experience title">Professional Experience</h1>
      <hr />
      <ExperienceCard
        title={"Internship at Sprout Solutions Phil., Inc."}
        date={"July 2022"}
        description={
          "I had my practicum at Sprout Solutions where I worked under mobile development. I created a schedule summary module Proof-of-Concept for their HR mobile application and an online portfolio PoC."
        }
      />
    </div>
  );
}

export default Experience;
