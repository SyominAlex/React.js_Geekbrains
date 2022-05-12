// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// ToDo: hide this params from GitHub!
const firebaseConfig = {
  apiKey: "AIzaSyA_v8is-ThOp2TkghHnbflw4HRyXVVEbe0",
  authDomain: "gb-react-220509.firebaseapp.com",
  databaseURL: "https://gb-react-220509-default-rtdb.firebaseio.com",
  projectId: "gb-react-220509",
  storageBucket: "gb-react-220509.appspot.com",
  messagingSenderId: "1065933778559",
  appId: "1:1065933778559:web:27a6d1711c53ef4aec994a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
  await signOut(auth);
};

// export const userRef = ref(db, "user"); // ref - это "живая" ссылка на участок БД
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
