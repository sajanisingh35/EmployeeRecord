import React, {useState, Fragment} from  "react";
import "../../App.css";
import { nanoid } from "nanoid";
import data from "../../mock-data";
import DeleteUser from "./users/DeleteUser";
import EditableRow from "./users/EditableRow";
import { NavLink } from "react-router-dom";



const AddUser = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
    return (
      <div className="app-container">
            
  

            <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
       
        <p>Enter your name:</p>
        <input
          type="text"
          name="fullName"
          required="required"
          onChange={handleAddFormChange}/>
         
    

  

         <p>Enter your Address:</p>
        <input
          type="text"
          name="address"
          required="required"
          onChange={handleAddFormChange}
        />
         <p>Enter your Phone Number:</p>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          onChange={handleAddFormChange}
        />
        <p>Enter your Email:</p>
        <input
          type="email"
          name="email"
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">AddEmployee</button>
      </form>
  
    <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick} />
                ) : (
                  <DeleteUser
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick} />

                )
                }
        <NavLink class="btn btn-primary mr-2" to={`/users/${contact.id}`}>
                    View
                  </NavLink>
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
 </div>
 );
}


export default AddUser;