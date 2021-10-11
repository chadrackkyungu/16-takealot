// // import firebase from "firebase";
// // import * as firebase from "firebase";
// // import firebase from "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyCfLnYpzf-mzp3_3MSknEvcIRFZ4KXauZI",
//   authDomain: "takealot-34d53.firebaseapp.com",
//   projectId: "takealot-34d53",
//   storageBucket: "takealot-34d53.appspot.com",
//   messagingSenderId: "78936834850",
//   appId: "1:78936834850:web:163147a79e828040745b7b",
// };
// // const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// // const db = app.firestore();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); //comments out
// // const usersCol = collection(db, "users");
// // const snapshot = await getDocs(usersCol);
// export default db;
// // export default snapshot;

import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"

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
