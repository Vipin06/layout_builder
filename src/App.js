import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Index";
import Footer from "./Components/Footer/Index";
import './App.css';
// import './styles.Scss';


function App() {

  return (
    <>
      <Container fluid>
        <Header />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
