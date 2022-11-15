import React from "react"

const AddContact=(props)=>{
    console.log(props)
    const [state, setState] = React.useState( {
        name:"",
        email:""
    })
    console.log(state)
    function handleChange(e){
        setState((preState)=>{
            return{
                ...preState,
                [e.target.name]:e.target.value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if(state.name==="" || state.email===""){
            alert(`The fields are mandatory`)
            return
        }
        console.log(e)
        props.contactHandler(state)
       setState((pre)=>{
        return{email:"",
            name:""
        }
       })
    }
    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                            name="name"
                            value={state.name} 
                            placeholder="name" 
                            onChange={handleChange}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                            name="email" 
                            value={state.email}
                            onChange={handleChange}
                            placeholder="email"/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact