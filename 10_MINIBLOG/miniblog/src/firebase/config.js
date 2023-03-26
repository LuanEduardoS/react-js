import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQ9Zxq9CCvC9UL-ROnM51sIS30Rckia7I",
  authDomain: "miniblog-e73b4.firebaseapp.com",
  projectId: "miniblog-e73b4",
  storageBucket: "miniblog-e73b4.appspot.com",
  messagingSenderId: "64383155212",
  appId: "1:64383155212:web:407a712509e5d64051c229"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }