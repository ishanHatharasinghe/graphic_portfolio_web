import { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Content from "./Components/Content";
import SocialMediaPosts from "./Components/SocialMediaPosts";
import Logo from "./Components/Logo";
import YoutubeThumbnails from "./Components/YoutubeThumbnails";
import SocialMediaCover from "./Components/SocialMediaCover";
import BookCover from "./Components/BookCover";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Copyright from "./Components/Copyright";
import ContactLinks from "./Components/ContactLinks";
import TempHome from "./Components/TempHome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 left-4 flex items-center z-30 hidden sm:block">
        <ContactLinks />
      </div>
      <Header />

      <div id="temphome">
        <TempHome />
      </div>

      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="socialMediaPosts">
        <SocialMediaPosts />
      </div>
      <div id="logo">
        <Logo />
      </div>
      <div id="youtubeThumbnails">
        <YoutubeThumbnails />
      </div>
      <div id="socialMediaCover">
        <SocialMediaCover />
      </div>
      <div id="bookCover">
        <BookCover />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="copyright">
        <Copyright />
      </div>
    </>
  );
}

export default App;
