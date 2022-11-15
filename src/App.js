import React from "react"
import {uuid} from "uuidv4"
import './App.css';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
 const [contacts, setContacts] = React.useState([])
 function addContactHandler(contact){
        console.log(contact)
        setContacts([...contacts,{id:uuid(),...contact}])
        console.log(setContacts)
 }
 const removeContactHandler=(id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id === id
  })
  setContacts(newContactList)
 }
 // to keep the contact list after refreshing the browser
 //local storage to persist the data using useEffect
 //useEffect helps to render the component again whenever the value changes

 React.useEffect(()=>{
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  setContacts(retrieveContacts)
 },[])


 React.useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
 },[contacts])

 

  return (
    <div className="ui container">
    <Header/>
    <AddContact contactHandler={addContactHandler}/>
    <ContactList list={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
