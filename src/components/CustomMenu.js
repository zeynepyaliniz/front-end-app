import AccountCircle from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import PersonAdd from '@mui/icons-material/PersonAdd'
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export default function CustomMenu(props) {
    debugger
    const [menu, setMenu] = useState(props)
    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                ////onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
               // anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                //open={Boolean(anchorEl)}
                //onClose={handleClose}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                    </ListItemIcon>
                    Profile</MenuItem>
                <MenuItem //onClick={handleClose}
                >
                    <ListItemIcon>
                        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                    </ListItemIcon>
                    My account</MenuItem>
                <MenuItem //onClick={handleClose}
                >
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem //onClick={handleClose} href='/signIn'
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    )
}
