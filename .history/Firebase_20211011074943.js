import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth" //* in case they where authentication this is how you will import it

const firebaseConfig = {
  apiKey: "AIzaSyAZspm-YuSOAfv-1kMc8A0FUSO94bZWtgQ",
  authDomain: "takealot-bb5ee.firebaseapp.com",
  projectId: "takealot-bb5ee",
  storageBucket: "takealot-bb5ee.appspot.com",
  messagingSenderId: "220905670038",
  appId: "1:220905670038:web:305e59988f6b340e4bc9b7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(auth) //* in case they where authentication this is how you will import it

export default db;
