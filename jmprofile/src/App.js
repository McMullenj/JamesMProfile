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
      <section className="Projects" id="projects">
        <JobsComponent/>
      </section>
    </div>
  );
}

export default App;
