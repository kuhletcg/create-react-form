import React, { useState } from 'react';

export default function Form(params) {
    const [name, setName] = useState('')
    const handleChange=(event)=> {
        setName(event.target.value );
    }   
    const handleSubmit=()=>{
        alert('A name was submitted: ' + name);
    }
     return(
        <div>
            Name:
            <input onChange={handleChange} type="text" value={name} />
            Surname:
            <input onChange={handleChange} type="text" value={name} />
            <input onClick={handleSubmit} type="submit" value="Submit" />
            </div>
    )
            
    
    
}