import * as React from "react";
import {useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import {onValue, push} from "firebase/database";

import {MessageList} from "../../components/MessageList/MessageList";
import {FormContainer} from "../../components/Form/FormContainer";
import {getMsgsListRefById, getMsgsRefById, auth} from "../../services/firebase";

export function Chat() {

    const { id } = useParams();

    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        // сообщения будут храниться в messageList в Realtime Database
        // на push Firebase присвоит свой рандомный id (типа -N1tWC5mYuCKO_W4Sg1U) и сохранит как массив внутри messageList
        push(getMsgsListRefById(id), {
            // author: AUTHORS.human,
            author: auth.currentUser.email,
            text,
            id: `msg-${Date.now()}`,
        });
        // dispatch(
        //     addMessageWithReply(
        // {
        //             author: AUTHORS.human,
        //             text,
        //             id: `msg-${Date.now()}`,
        //         },
        //         id
        //     )
        // );
    };

    useEffect(() => {
        // const unsb = onChildAdded, onChildMoved, onChildRemoved;
        const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                console.log(val?.messageList);
                setMessages(Object.values(val.messageList || {}));
            }
        });

        return unsubscribe;
    }, [id]);

    // ToDo: перенос логики работы с чатами и сообщениями в миддлвар (пример в Profile)

    /* Realtime Database Basic Rules:
    * {
      "rules": {
        ".read": "now < 1654635600000",  // 2022-6-8
        ".write": "now < 1654635600000",  // 2022-6-8
      }
    }
    * auth.uid можно использовать и в правилах
    * эти правила не заработали:
    * {
      "rules": {
        "messages": {
          ".read": "true",
          ".write": "auth !== null", // читать могут все, а писать - только залогиненные
        },
        "user": {
          ".read": "auth !== null",
          ".write": "auth !== null",
        },
      }
    }
    * */

    if (!messages) {
        return <Navigate to="chat" replace/>
    }

    return (
        <div id="messages">
            <MessageList messages={messages}/>
            <FormContainer onSubmit={sendMessage}/>
        </div>
    );
}