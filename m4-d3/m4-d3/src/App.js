import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <NavBar title="Strive School" />
      <Home jumboTitle="Welcome to Strive School"
        categoryTitle="Select a category" />
    </div>
  );
}

export default App;
