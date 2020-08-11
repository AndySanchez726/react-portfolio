import React from 'react';
import Header from './components/Header';
import About from './components/About Me'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div>
          <About></About>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </main>
    </div>

  );
}

export default App;
