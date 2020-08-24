import React from 'react';
import Home from './components/Home'
import NavBar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar title="Strive Restauant" />
      <div className="row">

        <Home title="hello" />

      </div>
    </div>
  );
}

export default App;
