import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Updateuser = () => {
    const [user,setuser]=useState({})
    const{id}=useParams()
    

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])

// name
const handleNameChange=e=>{
    const updateName=e.target.value;
    const updatedUser={name:updateName,email:user.email}
    setuser(updatedUser)
}
// email
const handleEmailChange=e=>{
    const updateEmail=e.target.value;
    const updatedUser={name:user.name,email:updateEmail}
    setuser(updatedUser)
}

    const handleUpdateUser=e=>{
        const url=`http://localhost:5000/users/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.matchedCount>0){
                  alert('updated suuceccsfullt')
                  setuser({})
              }
          })

        e.preventDefault()

    }

    return (
        <div>
            <h1>user update:{user.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="" onChange={handleNameChange} value={user.name || "" } id="" />
                <input type="email" name="" onChange={handleEmailChange} value={user.email  || ""} id="" />
                <input type="submit" value="updated" />
            </form>
        </div>
    );
};

export default Updateuser;