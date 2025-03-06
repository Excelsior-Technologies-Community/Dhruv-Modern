//import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Header from './component/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  
  
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
