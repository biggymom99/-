import React, { createContext, useState, ReactNode } from "react";

interface AuthData {
  id: string | null;
  username: string | null;
  nickname: string | null;
  createdAt: string | null;
  role: string | null;
  token: string | null;
  isAdmin: boolean;
}

interface AuthContextProps {
  authData: AuthData;
  setAuthData: React.Dispatch<React.SetStateAction<AuthData>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>(() => {
    const storedAuthData = localStorage.getItem('authData');
    let initialAuthData = storedAuthData ? JSON.parse(storedAuthData) : {
      id: null,
      username: null,
      nickname: null,
      createdAt: null,
      role: null,
      token: localStorage.getItem("token") || null,
      isAdmin: false
    };

    // 관리자 여부 확인 
    initialAuthData = {
      ...initialAuthData,
      isAdmin: initialAuthData.role === 'ADMIN',
    };
    return initialAuthData;
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};