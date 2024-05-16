import {Button,TextField,Typography} from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var [name,fname]=useState("shahanas")
  var [val,setval]=useState()
  var[sub,setsub]=useState()
  const handleInput=(e)=>{
   setval(e.target.value);
  }
  const submitHandler=()=>{
  setsub(val)
  }
  return (
    <div style={{margin:'100px'}}>
      <Typography variant='h6'>Welcome to {sub}</Typography><br />
      <TextField variant="outlined" onChange={handleInput} />
      <Button variant='contained'onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default Statebasics
