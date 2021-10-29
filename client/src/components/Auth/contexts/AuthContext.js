import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../../../Firebase'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const AuthContext = React.createContext()
// returns the useContext hook with AuthContext
export const useAuth = () => {
    return useContext(AuthContext)
}
/**
 *
 * @param children
 * @returns {JSX.Element}
 * @name : AuthProvider, AuthContext
 * @desc : used useContext hook to achieve the firebase OAuth,
 * AuthContext.Provider acts as a wrapper to the whole Authentication methods extending to
 * Login, SignUp, SignUpSignIn components so that each of these components gets access
 * to user id and password
 */
export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setIsLoading(false)
        })
    }, [])


    const value = {
        currentUser,
        login,
        signup
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!isLoading && children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthContext;
