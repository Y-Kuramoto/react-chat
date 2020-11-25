import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxFIGvTsJLiteAiARJr2OiJ5VwItZ_BQU",
  authDomain: "react-chat-d90e8.firebaseapp.com",
  databaseURL: "https://react-chat-d90e8.firebaseio.com",
  projectId: "react-chat-d90e8",
  storageBucket: "react-chat-d90e8.appspot.com",
  messagingSenderId: "121648509372",
  appId: "1:121648509372:web:eab16c4b27ab9b0f6e7bb9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;