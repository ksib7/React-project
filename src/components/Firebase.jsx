import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARx7ZFDmgUoB4w6EaTeBH5ZP9CJJCazyc",
  authDomain: "chat-bot-8d668.firebaseapp.com",
  projectId: "chat-bot-8d668",
  storageBucket: "chat-bot-8d668.appspot.com",
  messagingSenderId: "208085089877",
  appId: "1:208085089877:web:43fda35d4688c315b81edc",
};

const fb = initializeApp(firebaseConfig);

export const auth = getAuth(fb);

// Функция регистрации пользователя
export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

// Функция авторизации пользователя
export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

// Функция выхода пользователя из личного кабинета
export const logOut = async () => signOut(auth);
