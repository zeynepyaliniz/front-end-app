import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

export default function SelectedListItem({handleSelectedItem}) {
    debugger
    const [selectedIndex, setSelectedIndex] = React.useState(0);
   

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) =>{ handleSelectedItem(0); setSelectedIndex(0);}}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) =>{ handleSelectedItem(1); setSelectedIndex(1);}}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) =>{ handleSelectedItem(2); setSelectedIndex(2);}}
                >
                    <ListItemIcon>
                        <AlarmOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Alarms" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) =>{ handleSelectedItem(3); setSelectedIndex(3);}}
                >
                    <ListItemText primary="Trash" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) =>{ handleSelectedItem(4); setSelectedIndex(4);}}
                >
                    <ListItemText primary="Spam" />
                </ListItemButton>
            </List>
        </Box>
    );
}
