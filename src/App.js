import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  // originally found in Nav. lifted state to App level. These props can now pass down child components.
  // initializing category state as an array of objects
  const [categories] = useState([
    { name: "volume-one", description: "original run" },
    { name: "volume-two", description: "second go around" },
    { name: "hebdomas", description: "seven days" },
    { name: "hebdomas-ii", description: "seven more days"},
    { name: "days-01", description: "days gone by" },
    { name: "days-02", description: "days gone by" },
    { name: "days-03", description: "days gone by" },
    { name: "days-04", description: "days gone by" },
    { name: "days-05", description: "days gone by" },
    { name: "days-06", description: "days gone by" },
    { name: "days-07", description: "days gone by" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  // separate out days from above categories. days has sub sections. days will be passed down to Nav & Gallery
  // const [days] = useState([
  // ]);
  // const [currentDay, setCurrentDay] = useState(days[0]);

  return (
    <div id='body'>
      <Nav
       categories={categories} 
       setCurrentCategory={setCurrentCategory} 
       currentCategory={currentCategory}
      />
      <main id={currentCategory.name}>
        <Gallery currentCategory={currentCategory}/>
      </main>
      <About/>
    </div>
  );
}

export default App;
