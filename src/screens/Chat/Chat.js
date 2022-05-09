import {useMemo} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {FormContainer} from "../../components/Form/FormContainer";
import {useParams, Navigate} from "react-router-dom";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithReply} from "../../store/messages/actions";
import {selectMessagesByChatId} from "../../store/messages/selectors";

export function Chat() {

    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages); // селектор возвращает уже не объект сообщений, а массив
    const dispatch = useDispatch();

    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply(
        {
                    author: AUTHORS.human,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id)
        );
    };

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