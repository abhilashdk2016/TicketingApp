import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <AppBar position='static'>
        <CssBaseline />
        <Toolbar sx={{ display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <Box sx={{ display: 'flex', justifyContent:'space-between', gap: '1rem' }}>
                <Link href="/" style={{ color: "#fff" }}>
                    <HomeIcon style={{ fontSize: '30px'}} />
                </Link>
                <Link href="/TicketPage/new" style={{ color: "#fff" }}>
                    <AddCardIcon style={{ fontSize: '30px'}} />
                </Link>
            </Box>
            <Typography variant="h5">
                Ticketing APP with Mongoose
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Nav