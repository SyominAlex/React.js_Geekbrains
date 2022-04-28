import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link, Outlet} from "react-router-dom";
import {Form} from "../Form/Form";
import {Button} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {clearMessages, initMessagesForChat} from "../../store/messages/actions";

export const ChatList = () => { // chats, addChat, deleteChat
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const { changeTheme } = useContext(ThemeContext);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        // addChat(newChat);
        dispatch(addChat(newChat));
        dispatch(initMessagesForChat(newChat.id));
    }

    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(clearMessages(id));
    };

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
                <Form onSubmit={handleSubmit} />
            </List>
            <Outlet />
        </>
    );
}
