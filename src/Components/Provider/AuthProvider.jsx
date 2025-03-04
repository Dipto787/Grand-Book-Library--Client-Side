import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export let auth = getAuth(app);
export let AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    let createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signinUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }
    let logoutUser = () => {
        return signOut(auth);
    }
    let userInfo = {
        user,
        createUser,
        signinUser,
        logoutUser
    };
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;