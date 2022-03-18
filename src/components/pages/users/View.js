import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import { nanoid } from "nanoid";
import data from "../../../mock-data";
import { NavLink } from "react-router-dom";
import axios from "axios";


const View = () => {
const {records} =useState(null); 
    const [contact, setContact]= useState([]);

        
     
      
     
      const { id } = useParams();
      useEffect(() => {
       
      }, []);
   

  return (
    <div className="container py-4">
      <NavLink className="btn btn-success"   to="/">
           
        back to Home
      </NavLink>

            <h1 className="display">User Id: {id}</h1>
      <hr />
      <ul className="Details">
        <li className="list-group-item">name: {contact.fullName}</li>
        <li className="list-group-item">user name: {contact.address}</li>
        <li className="list-group-item">phone: {contact.phoneNumber}</li>
        <li className="list-group-item">email: {contact.email}</li>
        
       
      </ul>
     
      </div>
    
   
  );
};

export default View;