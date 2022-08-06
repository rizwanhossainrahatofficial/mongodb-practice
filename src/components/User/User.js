import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [users,setUsers]=useState([])
const url='http://localhost:5000/users';
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setUsers(data)
        
    })
},[]);

// delete
const handleDelete=id=>{
    const url=`http://localhost:5000/users/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
      if(data.deletedCount>0){
          alert('are yoy want to delete?')
          const remaining=users.filter(user=>user._id!==id)
            setUsers(remaining)
      }
    })
   
}



    return (
        <div>
          {
              users.map(user=><li>
                   id:{user._id}::{user.name}::{user.email}
                   <Link  to={`users/update/${user._id}`}> <button>Update</button></Link>
                   <button onClick={()=>handleDelete(user._id)}>X</button>
              </li>)
          }
        </div>
    );
};

export default User;