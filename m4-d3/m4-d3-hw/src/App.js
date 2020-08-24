import React from 'react';
import WarningSign from './components/WarningSign'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import NavBar from './components/NavBar'
import { Row } from 'react-bootstrap'
import './App.css';
function App() {
  return (
    <div className="App ">
      <NavBar />
      <WarningSign text="Do you want to get the latest information about new books? Check it out! " />
      {/* <Row className="justify-content-center">
        <SingleBook /></Row> */}

      <BookList />
    </div>
  );
}

export default App;
