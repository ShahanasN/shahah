import { Button,TextField } from '@mui/material'
import React from 'react'


const Register = () => {
  return (
    <div>
      <br /><br /><br /><br /><br />
      <TextField label="user name" variant="outlined" /><br /><br />
      <TextField label="email" variant="outlined" /><br /><br />
      <TextField label="phone number" variant="outlined" /><br /><br />
      <TextField label="Password" type="password" autoComplete="current-password"/><br /><br />
      <Button variant="contained">signup</Button>
    </div>
  )
}

export default Register
