import React from "react"
import User from "../images/user.jfif"
const ContactListCard=(props)=>{
    console.log(props)
    //const {id, name, email} = props.detail
    return(
        <div className="item">
            <img className="ui avatar iamge" width="45px" src={User} alt="user"/>
        <div className="content">
            <div className="header">
                {props.detail.name}
            </div>
            <div>
                {props.detail.email}
            </div>
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red",marginTop:"7px"}}
        onClick={()=>{props.clickHandler(id)}}
        ></i>
    </div>
    )
}

export default ContactListCard