import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import './components/jobs';
import JobsComponent from './components/jobs';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Software Developer</p>
      </header>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Mobile-nav">
        <div className="Hamburger" onClick={scrollToTop}>
          &#9776;
        </div>
      </div>
      <section className="About" id="about">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am a passionate software developer with expertise in React, JavaScript, and more.</p>
      </section>
      <section className="Projects" id="projects">
        <h2>Projects</h2>
        <JobsComponent/>
      </section>
      <section className="Contact" id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/your-profile</p>
      </section>
    </div>
  );
}

export default App;
