import React, { useContext, useState, useEffect } from "react";
import firebase, { auth } from "../backend/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout(){
    return auth.signOut();
  }

  function writeUserData(user){
    return firebase.database().ref('users/' + user.uid)
            .set(user);
  }

  function hasUser(uid){
    var exists = false;
    firebase.database().ref('users').on('value', (snapshot) => {
      const users = snapshot.val();
      for(let id in users){
        if(id == uid){
          exists = true;
        }
      }
    });
    return exists;
  }

  function getUser(uid){
    var user = {};
    firebase.database().ref('users').on('value', (snapshot) => {
      const users = snapshot.val();
      for(let id in users){
        if(id == uid){
          user = users[uid];
        }
      }
    });
    return user;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    writeUserData,
    hasUser,
    getUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
