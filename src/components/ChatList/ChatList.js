import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function ChatList({ chatList }) {
    return (
            <List sx={{ maxWidth: 200 }}>
                {chatList.map((chatList) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText key={chatList.id} primary={chatList.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
    );
}
