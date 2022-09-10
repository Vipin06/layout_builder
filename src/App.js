import React from "react";
import {Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterDropOne from "./FilterDropdownOne"
import FilterDropTwo from "./FilterDropdownthow"
import FilterField from "./TopbarFilter"
import './App.css';

function App() {

  return (
    <>
      <Container>
        <FilterField />
        <FilterDropOne />
        <FilterDropTwo />
      </Container>
    </>
  );
}

export default App;
