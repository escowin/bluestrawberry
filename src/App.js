import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  // originally found in Nav. lifted state to App level. These props can now pass down child components.
  // initializing category state as an array of objects
  const [categories] = useState([
    { name: "bluestrawberry-one", description: "original run" },
    { name: "bluestrawberry-two", description: "second" },
    { name: "hebdomas", description: "seven days" },
    { name: "days", description: "days gone by" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id='body' className='flex-column'>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
      <main>
        <Gallery/>
      </main>
      <About/>
    </div>
  );
}

export default App;
