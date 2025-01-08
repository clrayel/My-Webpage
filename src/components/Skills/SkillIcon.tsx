import "./Skills.css";

interface SkillIconProps {
  name: string;
  src: string;
}

export default function SkillIcon({ name, src }: SkillIconProps) {
  return <img src={src} alt={name} className="skill-icon" />;
}
