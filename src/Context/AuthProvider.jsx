import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
export const AuthContext=createContext()

const provider=new GoogleAuthProvider()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    // console.log(user)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const googleLogIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const authData={
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        googleLogIn
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;