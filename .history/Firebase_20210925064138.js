// import firebase from "firebase";
// import * as firebase from "firebase";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfLnYpzf-mzp3_3MSknEvcIRFZ4KXauZI",
  authDomain: "takealot-34d53.firebaseapp.com",
  projectId: "takealot-34d53",
  storageBucket: "takealot-34d53.appspot.com",
  messagingSenderId: "78936834850",
  appId: "1:78936834850:web:163147a79e828040745b7b",
};
const app = firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
