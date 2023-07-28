import React from 'react'

export default function User(props) {

    let data=[{id:1,name:"Mohit"}, {id:2, name:"Mohan"}, {id:3, name:"Ketan"}];
    
  return (
    <div>
       {data.map((user)=>(<p>id={user.id},name={user.name}</p>))}
       <p>id={props.id}, name={props.name}</p>
    </div>
  )
}
