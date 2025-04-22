"use client";
import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({
        logged:false,
        email:null,
        uid:null
    });

    const createUser = async (email, pass) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;
        setUser({logged:true, email:user.email, uid:user.uid});
    }

    const logInUser = async (email, pass) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;
        
        if (user) {
            setUser({logged:true, email:user.email, uid:user.uid});
            console.log(user);
        } else {
            console.log("Error! El usuario ingresado no es válido!");
        }
    }

    return <AuthContext.Provider value={{user, logInUser, createUser}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider