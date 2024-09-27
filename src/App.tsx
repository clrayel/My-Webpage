import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="viewscreen">
        <ProfileCard />
      </div>

      <Experience />

      <Contacts />
    </>
  );
}

export default App;
