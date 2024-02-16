import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';
import JobsComponent from './components/jobs';
import Header from './components/header';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <Header onClick={scrollToTop}/>
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
        <p>LinkedIn: linkedin.com/in/your-profile</p>
      </section>
    </div>
  );
}

export default App;
