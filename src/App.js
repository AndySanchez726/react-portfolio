import React from 'react';
import Header from './components/Header';
import About from './components/About Me'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div>
          <About></About>
          <Footer></Footer>
        </div>
      </main>
    </div>

  );
}

export default App;
