import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    SecureStore.getItemAsync("token").then((data) => setToken(data));
  }, []);

  const changeToken = async (newToken: string) => {
    await SecureStore.setItemAsync("token", newToken);
    setToken(newToken);
  };
  return { token, changeToken };
};
