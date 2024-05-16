import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <AppBar>
        <Toolbar>
            <Typography variant="h6">Home</Typography>
            <Button variant="contained">Login</Button>
            <Button variant="contained">
            <Link to='/reg'>signup</Link>
           </Button>
           <Button variant="contained"><Link to='/u'>Here</Link></Button>
           <Button variant="contained"><Link to='/v'>view</Link></Button>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar

