import React from "react"
import ContactListCard from "./ContactListCard"
const ContactList=(props)=>{
    //console.log(props)
    const deleteContactList=(id)=>{
        props.getContactId(id)
    }
    const renderContactList =props.list.map((item)=>{
        return(
            <ContactListCard detail={item} clickHandler={deleteContactList} key={item.id}/>
        )
    })
    
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList