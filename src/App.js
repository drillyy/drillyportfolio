import "./App.css";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";
import { useRef } from "react";

function App() {

  const introSection = useRef(null)
  const aboutSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);

  return (
    <div className="App">
      <Navbar introLink={introSection}/>
      <Intro refProp={introSection} aboutLink={aboutSection}/>
      <About refProp={aboutSection} skillsLink={skillsSection}/>
      <Skills refProp={skillsSection} projectsLink={projectsSection}/>
      <Projects refProp={projectsSection}/>
    </div>
  );
}

export default App;
