import Projects from "./projects";
import About from "./about";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <>
      <div>
        <div className="#">
          <LandingPage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="works">
          <Projects />
        </div>
      </div>
    </>
  );
}
