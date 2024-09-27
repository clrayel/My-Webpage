import "./Experience.css";

interface ExperienceCardProps {
  title: string;
  date: string;
  description: string;
}

function ExperienceCard({ title, date, description }: ExperienceCardProps) {
  return (
    <div id="experience-card" className="experience card">
      <h2 className="experience card-title">{title}</h2>
      <blockquote>
        <p className="experience card-date">
          <i>{date}</i>
        </p>
      </blockquote>
      <p className="experience card-description">{description}</p>
    </div>
  );
}

export default ExperienceCard;
