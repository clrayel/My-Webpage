import "./Skills.css";
import SkillIcon from "./SkillIcon";

import javascriptIcon from "../../assets/JavaScript-logo.png";
import reactIcon from "../../assets/react-logo.png";
import pythonIcon from "../../assets/python-logo.png";
import flutterIcon from "../../assets/flutter-logo.png";
import gitIcon from "../../assets/git-logo.png";
import cIcon from "../../assets/C_Logo.png";
import mongodbIcon from "../../assets/Mongodb-logo.png";
import javaIcon from "../../assets/java-logo.png";
import cSharpIcon from "../../assets/Csharp_Logo.png";

export default function Skills() {
  let iconList = [
    {
      src: javascriptIcon,
      name: "Javascript",
    },
    {
      src: reactIcon,
      name: "REACT",
    },
    {
      src: pythonIcon,
      name: "Python",
    },
    {
      src: flutterIcon,
      name: "Flutter/Android Studio",
    },
    {
      src: gitIcon,
      name: "Git",
    },
    {
      src: cIcon,
      name: "C",
    },
    {
      src: mongodbIcon,
      name: "MongoDB",
    },
    {
      src: javaIcon,
      name: "Java",
    },
    {
      src: cSharpIcon,
      name: "C Sharp",
    },
  ];
  return (
    <div className="skills-space">
      <div className="skills">
        {iconList.map((icon, index) => (
          <SkillIcon key={index} src={icon.src} name={icon.name} />
        ))}
      </div>
    </div>
  );
}
