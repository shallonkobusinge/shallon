import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Projects from "./routes/projects";

function App() {
  return (
    <>
      {/* <nav className="navbar">
        <ul>
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
        </ul>
      </nav> */}
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>

      {/* <section id="section1" className="section">
        <h1>Section 1</h1>
        <p>This is the content of Section 1.</p>
      </section>

      <section id="section2" className="section">
        <h1>Section 2</h1>
        <p>This is the content of Section 2.</p>
      </section>

      <section id="section3" className="section">
        <h1>Section 3</h1>
        <p>This is the content of Section 3.</p>
      </section> */}
    </>
  );
}

export default App;
