import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'projects',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   }
  // ]);
  const[showSelected, setShowSelected] = useState(false);
  // const showSelected = {showSelected}
  console.log({showSelected})


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

 


  return (
    <div>
      <Header />
      <Nav 
        showSelected={showSelected}
        setShowSelected={setShowSelected}
      />
      <main>

        <div>
          {!showSelected ? (
            <>
              <About />
              <ProjectList />
            </>
          ) : (
            <Contact />
          )}
          <Footer />
        </div>
        {/* <div>
          switch (showSelected) {
            case 'About':
              <About />
              break;
          
            default:
              break;
          }
        </div> */}
      </main>
    </div>

  );
}

export default App;
