import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ChatList = ({ chatList }) => (
    <List sx={{ maxWidth: 200, flexGrow: 1 }} >
        {chatList.map((chatList) => (
            <ListItem disablePadding key={chatList.id.toString()} >
                <ListItemButton>
                    <ListItemText primary={chatList.name} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
);
