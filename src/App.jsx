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
import TempHome from "./Components/TempHome";
import UIUX from "./Components/UX-UI-Designs";
import Tdesigns from "./Components/TDesigns";
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
      <Header />

      <div id="home">
        <Home />
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
      <div id="Tdesigns">
        <Tdesigns />
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
