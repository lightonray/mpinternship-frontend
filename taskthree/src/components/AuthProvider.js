import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        localStorage.setItem('loginToken', action.payload); // Set the token in localStorage
        return action.payload;
      case 'LOGOUT':
        localStorage.removeItem('loginToken'); // Remove the token from localStorage on logout
        return null;
      default:
        return state;
    }
  }, localStorage.getItem('loginToken') || null); // Initialize with the token from localStorage

  useEffect(() => {
    // This effect ensures that the token in state stays in sync with localStorage
    const storedToken = localStorage.getItem('loginToken');
    if (storedToken !== token) {
      setToken({ type: 'LOGIN', payload: storedToken });
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;