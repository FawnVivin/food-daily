import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useToken = () => {
  const [token, setToken] = useState<string>("");
  const [isTokenExist, setIsTokenExist] = useState(false)

  useEffect(() => {
    void SecureStore.getItemAsync('token').then((data) => {
      setToken(data)
      setIsTokenExist(Boolean(data))
    })
  }, [])

  const changeToken = (newToken: string) => {
    void SecureStore.setItemAsync('token', newToken).then(() => {
      setToken(newToken)
      setIsTokenExist(Boolean(newToken))
    })
  };

  return { token, changeToken, isTokenExist };
};
