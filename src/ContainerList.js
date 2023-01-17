import React from 'react'
import UserList from './UserList'

const ContainerList = ({resultat}) => {
  return (
    <div>
        {
      resultat.map((el,key)=>{
        return <UserList element ={el} key={el.id}/>})
     
      }
    </div>
  )
}

export default ContainerList