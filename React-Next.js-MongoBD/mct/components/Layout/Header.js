import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Nav from '../nav'



const Header = () => (
    <div>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit">
      Macro Compliance Tracker
    </Typography>
  </Toolbar>
  <Nav />
        </AppBar>
    </div>
)

export default Header;