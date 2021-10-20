import React, { createContext } from 'react';
import useFirebase from '../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ service }) => {
    // const { children } = props;
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {service}
        </AuthContext.Provider>
    );
};

export default AuthProvider;