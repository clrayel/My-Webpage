import "./Projects.css";

interface ProjectCardProps {
  title: string;
  purpose: string;
  description: string;
}

export default function ProjectCard({
  title,
  purpose,
  description,
}: ProjectCardProps) {
  return (
    <div id="project-card" className="project card">
      <h2 className="project card-title">{title}</h2>
      <blockquote>
        <p className="project card-purpose">
          <i>| {purpose}</i>
        </p>
      </blockquote>
      <p className="project card-description">{description}</p>
    </div>
  );
}
