import logo from './logo.svg';
import './App.css';
import ProfileCard from "./Componets/ProfileCard";
import SocialLinks from "./Componets/SocialLinks";

function App() {
   const user = {
    name: "Vishal",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OLMvbgFpDfuV2Q1qnYuqdy_ZrzCwAqjtgDTQWe0vKQ&s=10",
    bio: "Frontend Developer | React Enthusiast | Open Source Contributor", };

  const socialLinks = {
    instagram: "https://instagram.com/vishal",
    linkedin: "https://linkedin.com/vishalkandoriya",
    github: "https://github.com/vishalahir-1010",};

  return (
       <div className="App">
      <h1>InstaBio</h1>

      <ProfileCard
        name={user.name}
        profilePic={user.profilePic}
        bio={user.bio}/>

      <SocialLinks
        links={socialLinks}
        theme="dark"/>
    </div>
  );
}

export default App;
