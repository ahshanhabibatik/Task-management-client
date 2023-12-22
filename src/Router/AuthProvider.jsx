import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const handleUpdateProfile = (name, photo) => {
        console.log(auth.currentUser);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect (() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
           
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        handleUpdateProfile,
        logOut,
        githubSignIn
    };

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}