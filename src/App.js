import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  return (
    <div id='body' className='flex-column'>
      <Nav/>
      <main>
        <Gallery/>
      </main>
      <About/>
    </div>
  );
}

export default App;
