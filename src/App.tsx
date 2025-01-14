import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="viewscreen">
        <ProfileCard />
      </div>

      <Skills />

      <Experience />

      <Projects />

      <Contacts />
    </>
  );
}

export default App;
