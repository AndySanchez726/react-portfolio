import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';
import PhotoList from './components/PhotoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'projects',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   }
  // ]);
  const[contactSelected, setContactSelected] = useState(false);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          <Header />
          <About />
          <PhotoList />
          <Contact />
        </div>
      </main>
    </div>

  );
}

export default App;
