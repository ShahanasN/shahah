
import {Button,Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

const Use = () => {
    var [val,setval]=useState()
    const react=()=>{
        setval("React")
    }
    const ang=()=>{
        setval("Angular")
    }
    const node=()=>{
        setval("node")
    }
    useEffect(()=>{
      react();
    },[])
    
  return (
    <div>
        &nbsp; <br /><br /><br /><br /><br />
      <Typography varaint='h6'>welcome to {val}</Typography><br />
      <Button variant='contained' color="success" onClick={react}>React</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='error' onClick={ang}>Angular</Button>
      &nbsp;&nbsp;
      <Button variant='contained'color="success" onClick={node}>node</Button>
    </div>
  )
}

export default Use
