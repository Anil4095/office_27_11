import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {Routes, Route,Navigate} from "react-router-dom"
import Service from './component/Service';
import Navbar from './component/Navbar';
import Chat from './Hookspro/Chat';
import SizeEffect from './Hookspro/SizeEffect';
import UseEffectApi from './Hookspro/UseEffectApi';


function App() {
  return (
    <>
    {/* <div className="App">
     <Navbar/>
    <Routes  className="rout-div">
       <Route  exact  path="/"  element={<Home />}/>
       <Route  exact  path="/service"  element={<Service />}/>
       <Route  exact  path="/about"  element={<About />}/>
       <Route  exact path="contact"  element ={<Contact/>}/>
       <Route path="*" element={<Navigate to ="/" />}/> 
    </Routes>
     </div> */}
     <UseEffectApi/>
    </>
  );
}

export default App;
