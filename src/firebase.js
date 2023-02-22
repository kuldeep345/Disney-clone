import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjOa6r9W99we4_h6_VXs9npxhOiTRniJ0",
    authDomain: "diney-clone-bab20.firebaseapp.com",
    projectId: "diney-clone-bab20",
    storageBucket: "diney-clone-bab20.appspot.com",
    messagingSenderId: "1014060846216",
    appId: "1:1014060846216:web:cf4d3d24bc33648c92e33d"
};

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp);
  const provider = new GoogleAuthProvider();

  export { auth , provider , db }
