import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export let auth = getAuth(app);
export let AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);
    let googleProvider = new GoogleAuthProvider();
    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    let continueWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    let logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    let userInfo = {
        user,
        createUser,
        signinUser,
        logoutUser,
        continueWithGoogle,
        loading
    };
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
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