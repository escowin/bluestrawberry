import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div id='body' className='flex-column'>
      <Nav/>
      <main></main>
      <About/>
    </div>
  );
}

export default App;
