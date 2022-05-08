import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {persistReducer, persistStore} from "redux-persist";

import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import {articlesReducer} from "./articles/reducer";

const persistConfig = {
    key: "gbMessenger",
    storage,
    // blacklist: ["messages", "chats"],
    // whitelist: ["messages", "chats"],
    // version: ...,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
    // rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
