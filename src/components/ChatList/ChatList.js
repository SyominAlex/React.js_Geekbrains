import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";

export const ChatList = ({ chatList }) => (
    <>
        <List sx={{ maxWidth: 200, flexGrow: 1 }} >
            {chatList.map((chatList) => (
                <ListItem disablePadding key={chatList.id.toString()} >
                    <ListItemButton>
                        <ListItemText primary={
                            <Link to={`/chat/${chatList.id}`} >
                                {chatList.name}
                            </Link>
                        } />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Outlet />
    </>
);
