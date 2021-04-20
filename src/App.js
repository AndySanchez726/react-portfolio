import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[showSelected, setShowSelected] = useState({home: false, about: false, projects: false, contact: false});
  console.log(showSelected)
  return (
    <div>
      <div id='headerNav'>
      <Header id='header' />
      <Nav
      showSelected = {showSelected}
      setShowSelected = {setShowSelected}
      />
      </div>
      <main>
        <div>
          {showSelected.home ? <About/> : null}
          {showSelected.about ? <About/> : null}
          {showSelected.projects ? <ProjectList/> : null}
          {showSelected.contact ? <Contact/> : null}
        </div>
      </main>
      <Footer/>

    </div>

  );
}

export default App;
