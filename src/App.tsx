import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import TopNavbar from "./components/TopNavbar/TopNavbar";

function App() {
  return (
    <>
      <TopNavbar />

      <ProfileCard />

      <Contacts />
    </>
  );
}

export default App;
