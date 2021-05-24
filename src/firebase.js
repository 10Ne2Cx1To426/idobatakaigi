import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAw7tH5YUW3USA0paUL_LL5xZ475u70JUA",
  authDomain: "idobatakaigi-with-ham-8d34a.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-8d34a",
  storageBucket: "idobatakaigi-with-ham-8d34a.appspot.com",
  messagingSenderId: "843905919229",
  appId: "1:843905919229:web:59826bd2bef6ac04c97694"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text}) => {
  messagesRef.push({ name, text });
};