import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";

export const ChatList = ({ chats }) => {
    if (!chats) {
        console.log('chatList is null');
        return null;
    }
    return (
        <>
            <List sx={{ maxWidth: 200, flexGrow: 1 }} >
                {chats.map((chats) => (
                    <ListItem disablePadding key={chats.id} >
                        <ListItemButton>
                            <ListItemText primary={
                                <Link to={`/chat/${chats.id}`} >
                                    {chats.name}
                                </Link>
                            } />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Outlet />
        </>
    );
}
