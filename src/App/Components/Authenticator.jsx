import { createContext, useContext, useEffect, useState } from 'react';

const Authenticator = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')));
        }
    }, [children]);

    return (
        <Authenticator.Provider value={{ loginData, setLoginData }}>
            {children}
        </Authenticator.Provider>
    );
};

const useAuth = () => useContext(Authenticator);

// eslint-disable-next-line react-refresh/only-export-components
export { Authenticator, AuthProvider, useAuth };
