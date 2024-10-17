import "./Skills.css";

interface SkillIconProps {
  key: int;
  name: string;
  src: string;
}

export default function SkillIcon({ key, name, src }: SkillIconProps) {
  return <img src={src} alt={name} className="skill-icon" />;
}
