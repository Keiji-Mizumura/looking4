import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQqbhmWl7TAVxMIINSh2kIYw_aMg28zYc",
  authDomain: "looking4-28e6f.firebaseapp.com",
  databaseURL: "https://looking4-28e6f-default-rtdb.firebaseio.com",
  projectId: "looking4-28e6f",
  storageBucket: "looking4-28e6f.appspot.com",
  messagingSenderId: "693803054506",
  appId: "1:693803054506:web:06b173246a94e268dfa7d3",
  measurementId: "G-5W94RSPL3H",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app(); // if already initialized, use that one
}



export const auth = app.auth();

export default app;
