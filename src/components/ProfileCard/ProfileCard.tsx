import "./ProfileCard.css";
import ProfileImage from "../../assets/profile_image.jpg";

function ProfileCard() {
  return (
    <div className="profile parent" id="profile">
      <div className="profile child">
        <img src={ProfileImage} alt="profile image" className="profile image" />
      </div>
      <div className="profile child">
        <h1 className="profile name">Hi, I'm Carlos!</h1>
        <p className="profile description">
          I'm a BS Computer Science graduate of the University of the
          Philippines, Los Baños. I'm currently interested in Web Development
          and graphic design, but I'm also open to new possibilities.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
