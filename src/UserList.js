import React from 'react'

const UserList = ({element}) => {
  return (
    <div>UserList
        <div>
        <h1>{element.id}</h1>
        <h3>{element.name}</h3>
        <h3>{element.userName}</h3></div>
        
        
    </div>
  )
}

export default UserList