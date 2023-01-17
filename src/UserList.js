import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




const UserList = ({element}) => {
  const [value, setValue] = React.useState(2);
  const navigate= useNavigate()
  return (
    <div style={{border :'1px solid blue' ,borderRadius:'10%', width :'200px', color:'grey'}}>
        <h1>user identifiant : {element.id}</h1>
        <h3> user name : {element.name}</h3>
        <h3>{element.userName}</h3>         
    <Box sx={{'& > legend': { mt: 2 },}}>
      <Typography component="legend">Skills</Typography>

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        <Button variant="outlined" onClick={()=>navigate(`/details/${element.id}`)}> Show more</Button>
    </div>
  )
}

export default UserList