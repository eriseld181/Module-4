import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cover from './components/cover/cover.jsx'
import Body from './components/body'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter '
function App() {
  return (
    <>
      <MyNav title="Eriseld Bookstore" />
      <Cover />

      <Body />



      <MyFooter />
    </>
  );
}

export default App;
