import React, { useEffect, createContext, useContext, useState, ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '../sharedService/fireBase/firebase';

const auth = getAuth(firebase_app);

interface AuthContextProps {
  user: User | null;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
