import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About Me';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Transition, CSSTransition } from 'react-transition-group';


function App() {
  const[showSelected, setShowSelected] = useState({home: true, about: false, projects: false, contact: false });
  const [inProp, setInProp] = useState(false);

  function mountContact() {
    const contactJSX = document.createElement('div');
  }

  console.log(inProp)

  return (
    <div>
      <div id='headerNav'>
        <Header id='header' />
        <Nav
          showSelected = {showSelected}
          setShowSelected = {setShowSelected}
          inProp={inProp}
          setInProp={setInProp}
          />
      </div>
      <main>
        <div>
          {showSelected.home ? 
            <Home 
              inProp={true}
              setInProp={setInProp}
            />: null
          }
          {showSelected.about ? 
            <About 
              inProp={inProp}
              setInProp={setInProp}
            />: null
          }

          {showSelected.projects ? 
            <ProjectList
              inProp={inProp}
              setInProp={setInProp}
            />
            : null
          }

          {showSelected.contact ? 
            <Contact
              inProp={inProp}
              setInProp={setInProp}
            />
            : null
          }
        </div>
      </main>
      <Footer/>

    </div>

  );
}

export default App;
