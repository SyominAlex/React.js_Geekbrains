import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";
import {Form} from "../Form/Form";

export const ChatList = ({ chats, addChat }) => {
    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        addChat(newChat);
    }

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
            <Form onSubmit={handleSubmit} />
            <Outlet />
        </>
    );
}
