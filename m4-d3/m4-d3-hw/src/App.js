import React from 'react';
import WarningSign from './components/WarningSign'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import { Row } from 'react-bootstrap'
import './App.css';
function App() {
  return (
    <div className="App ">
      <WarningSign text="This is an alert,  check it out! " />
      <Row className="justify-content-center">
        <SingleBook /></Row>

      <BookList />
    </div>
  );
}

export default App;
