"use client";

import { DecodeUser } from "@/functions/DecodeUser";
import { getToken } from "@/services/requests";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useGet from "@/hooks/api/useGet";
import { IDecodedToken, IUser } from "@/interfaces/UserInterfaces";

interface IUserContext {
  user?: IUser;
  decodedUser: IDecodedToken | null;
  loading: boolean;
  error: boolean;
  setUser: React.Dispatch<React.SetStateAction<any | undefined>>;
  getUserData: () => void;
  getDecodedUserData: () => Promise<void>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>();
  const [decodedUser, setDecodedUser] = useState<IDecodedToken | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { getData } = useGet();

  // Decodifica o usuário do token no carregamento
  const getDecodedUserData = async () => {
    const token: string | null = await getToken();
    const decoded = DecodeUser(token);
    setDecodedUser(decoded || null);
  };

  // Recupera os dados do usuário com base no decodedUser
  const getUserData = async () => {
    if (!decodedUser?.userId) {
      console.error("ID do usuário não encontrado.");
      return;
    }

    setLoading(true);
    try {
      const res: any = await getData(
        `/users/list?method=id&parameter=${decodedUser.userId}`
      );
      if (res.response) {
        setUser(res.response);
      }

      if (res.statusCode !== 200) {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Decodifica o token no início e busca os dados do usuário
  useEffect(() => {
    const fetchData = async () => {
      await getDecodedUserData();
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        decodedUser,
        error,
        setUser,
        getDecodedUserData,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
