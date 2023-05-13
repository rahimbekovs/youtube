import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCcC4v5yusaSdZ1appEEH1ScJlh6lhA_gM",
    authDomain: "fir-e3e38.firebaseapp.com",
    projectId: "fir-e3e38",
    storageBucket: "fir-e3e38.appspot.com",
    messagingSenderId: "925459909835",
    appId: "1:925459909835:web:b7aa49cf23534a7d159f4e",
    measurementId: "G-L99L3MXGSP"
  });

const auth = app.auth();
export { auth };
export default app;