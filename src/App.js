//import logo from './logo.svg';
import "./App.css";
import Home from "./component/home";
import Header from "./component/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homemodify from "./component/homemodify";
import Feature from "./component/feature";
import Pricing from "./component/pricing";
import Integration from "./component/intigration";
import About from "./component/about";
import Contact from "./component/contact";
import Support from "./component/support";
// import CustomAccordion from "./component/feature";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <CustomAccordion /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modify" element={<Homemodify />} />
          <Route path="/feature" element={<Feature/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/intigration" element={<Integration/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/support" element={<Support/>}/>

          


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
