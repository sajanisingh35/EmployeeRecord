// import logo from './logo.svg';
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import AddUser from './components/pages/AddUser';
import EditableRow from './components/pages/users/EditableRow';
import View from './components/pages/users/View';

import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';



function App() {
  return (

      <div className="App">
     
      <Router> 
      <Navbar/> 
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path="/users/add" element={<AddUser/>} />
        <Route exact path="/users/edit" element={<EditableRow/>} />
        <Route exact path="/users/:id" element={<View/>} />

      </Routes>

     
    </Router>
   

     
    </div>
  
  );
}

export default App;
