/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;

        return updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...createdUser, displayName: name, photoURL: photo });
        });
      })
      .finally(() => setLoading(false));
  };

  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider).finally(() => setLoading(false));
  };

  const handleSignOut = () => {
    return signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    handleRegister,
    handleSignIn,
    googleSignIn,
    handleSignOut,
    setUser,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
