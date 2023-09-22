import { createContext, useContext, useEffect, useState } from 'react';

const Authenticator = createContext();

const AuthProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('');

    useEffect(() => {
        // Initialize the loginData from sessionStorage only once when the component mounts
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setLoginData(JSON.parse(storedToken));
        }
    }, []); // Empty dependency array ensures this effect runs only on mount

    return (
        <Authenticator.Provider value={{ loginData, setLoginData }}>
            {children}
        </Authenticator.Provider>
    );
};

const useAuth = () => useContext(Authenticator);

export { Authenticator, AuthProvider, useAuth };
