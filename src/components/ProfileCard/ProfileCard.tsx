import "./ProfileCard.css";
import ProfileImage from "../../assets/profile_image.jpg";

function ProfileCard() {
  return (
    <div className="parent">
      <div className="child">
        <img src={ProfileImage} alt="profile image" className="profile image" />
      </div>
      <div className="child">
        <h1 className="profile name">Carlos Angelo L. Rayel</h1>
        <p className="profile details">
          BS Computer Science graduate of the University of the Philippines, Los
          Baños. Interested in Web Development and graphic design, but is open
          to new job prospects.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
