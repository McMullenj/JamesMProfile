import React from 'react';
// 

import './App.css';
import JobsComponent from './components/jobs';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header />      
      <section id="about">
        <JobsComponent/>
      </section>
      <section id="jobs">
        <JobsComponent/>
      </section>
      <section id="jobs">
        <JobsComponent/>
      </section>
      <section id="jobs">
        <JobsComponent/>
      </section>
    </div>
  );
}

export default App;
