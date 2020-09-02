import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    }
  ]);
  const[contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Header></Header>
      <main>
        <div>
          <About></About>
          <Gallery currentCategory={currentCategory}></Gallery>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
    </div>

  );
}

export default App;
