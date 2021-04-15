import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[showSelected, setShowSelected] = useState({about: false, projects: false, contact: false});

  return (
    <div>
      <Header />
      <Nav 
      showSelected = {showSelected}
      setShowSelected = {setShowSelected}
      />
      <main>
        <div>
          {showSelected.about ? <About/> : null}
          {showSelected.projects ? <ProjectList/> : null}
          {showSelected.contact ? <Contact/> : null}
          <Footer />
        </div>
      </main>
    </div>

  );
}

export default App;
