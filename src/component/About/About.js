import logo from "../../logo.svg";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <img src={logo} className="about-logo" alt="logo" />
        <p>
          Edit <code>src/About.js</code> and save to reload.
        </p>
        <a
          className="about-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className="App-link" to="/">
          Link to Home
        </Link>
      </header>
    </div>
  );
}

export default About;
