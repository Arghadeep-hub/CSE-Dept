import React from 'react';
import "./style/App.css";
import Footer from './component/Footer';
import Navigation from "./component/Navigation";
import Home from './component/Home';


function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  )
}

export default App