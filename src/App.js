import './App.css';
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import Complement from './Complement';
import TextForm from './Textform';
import {useState} from 'react'
import Primecheck from './Primecheck';
import { Route, Routes } from 'react-router-dom';
function App() {
  document.body.style.backgroundColor="#03045e";
  document.body.style.color = "#0077B6"; 
  document.body.style.height='100vh';
  return (
    <>
      <div>
        <Navbar title="Edit It" about="Features Offered"/>
        <div className="container my-3">
        </div>
      </div>
      <Routes>
        <Route path="/text" element={<TextForm/>} />
        <Route path="/" element={<Primecheck/>} />
        <Route path="/comp" element={<Complement/>} />
      </Routes>
    </>
  );
}
export default App;
