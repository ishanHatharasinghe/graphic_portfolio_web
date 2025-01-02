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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Content />
      <SocialMediaPosts />
      <Logo />
      <YoutubeThumbnails />
      <SocialMediaCover />
      <BookCover />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
