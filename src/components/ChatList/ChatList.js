import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import {Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link, Outlet} from "react-router-dom";
import {set, remove, onValue} from "firebase/database";

import {ThemeContext} from "../../utils/ThemeContext";
import {FormContainer} from "../Form/FormContainer";
import {chatsRef, getChatRefById, getMsgsRefById} from "../../services/firebase";

export const ChatList = () => {
    const [chats, setChats] = useState();

    const { changeTheme } = useContext(ThemeContext);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), { exists: true });
    }

    const handleRemoveChat = (id) => {
        remove(getChatRefById(id)); // тоже удаляет из Firebase
        set(getMsgsRefById(id), null);
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            // chatsRef - ссылка на все чаты, т.к. слушаем изменения всех чатов
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

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
                        <Button className={"Button"}  variant={"contained"} type="submit" onClick={() => handleRemoveChat(chats.id)}>Удалить</Button>
                    </ListItem>
                ))}
                <FormContainer onSubmit={handleSubmit} />
            </List>
            <Outlet />
        </>
    );
}
