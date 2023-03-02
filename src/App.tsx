import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { IAnimal } from './models/IAnimal';
import { getAnimals, getAnimalsById } from './services/animalService';


function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>  
     

  );
}

export default App;
