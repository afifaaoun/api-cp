import {useNavigate, useParams } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
const Details = () => {
    const navigate= useNavigate();
    const data = useSelector(state => state.user.list)
    
    console.log('dddd', data)
    const ID = useParams()
    const singleUser= data.find(el => el.id === Number(ID.id))
console.log(singleUser);
  return (
    <div>
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile' style={{width :"100px"}}/>
        </div>
      <h5>Name : {singleUser.name}</h5>
      <h5>Address : {singleUser.address.street }</h5>
      <h5>phone : {singleUser.phone }</h5>
      <h5>email : {singleUser.email }</h5>
      <h5>website : {singleUser.website }</h5>
      <h5>company : {singleUser.company.name }</h5>
    
    <Button type="button" variant="outlined" onClick={()=> navigate('/')}> back home</Button>
    </div>
  ) 
}

export default Details



