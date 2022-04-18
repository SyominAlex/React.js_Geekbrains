import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";
import {Form} from "../Form/Form";
import {Button} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";

export const ChatList = ({ chats, addChat, deleteChat }) => {
    const { changeTheme } = useContext(ThemeContext);

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
            <Button className={"Button"}  variant={"outlined"} onClick={changeTheme}>
                Сменить тему
            </Button>
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
                        <Button className={"Button"}  variant={"contained"} type="submit" onClick={() => deleteChat(chats.id)}>Удалить</Button>
                    </ListItem>
                ))}
                <Form onSubmit={handleSubmit} />
            </List>
            <Outlet />
        </>
    );
}
