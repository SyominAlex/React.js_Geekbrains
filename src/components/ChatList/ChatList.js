import * as React from 'react';
import {useContext, useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {useSelector} from "react-redux";
import {ThemeContext} from "../../utils/ThemeContext";
import {Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link, Outlet} from "react-router-dom";
import {set, remove, onValue} from "firebase/database";

import {FormContainer} from "../Form/FormContainer";
// import {selectChats} from "../../store/chats/selectors";
// import {addChat, deleteChat} from "../../store/chats/actions";
// import {clearMessages, initMessagesForChat} from "../../store/messages/actions";
import {chatsRef, getChatRefById, getMsgsRefById} from "../../services/firebase";

export const ChatList = () => {
    const [chats, setChats] = useState();
    // const chats = useSelector(selectChats);
    // const dispatch = useDispatch();

    const { changeTheme } = useContext(ThemeContext);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        // dispatch(addChat(newChat));
        set(getChatRefById(newChat.id), newChat);
        // dispatch(initMessagesForChat(newChat.id));
        set(getMsgsRefById(newChat.id), { empty: true });
    }

    const handleRemoveChat = (id) => {
        // dispatch(deleteChat(id));
        // set(getChatRefById(id), null);
        remove(getChatRefById(id)); // тоже удаляет из Firebase
        // dispatch(clearMessages(id));
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
