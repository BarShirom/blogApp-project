import { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (inputs: any) => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<any> = ({
  children,
}: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs: any) => {
    const res = await axios.post("/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


