import axios from "axios";
import { apiUrl, queryClient } from "@food-daily/mobile/constants";
import { useToken } from "@food-daily/mobile/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";

import { authorizationRoutes, consumedProductsRoutes, userRoutes } from "./api.routes";

import type { DailyStats, Login, UpdateUserDto ,type  User } from "@food-daily/shared/types";





export const api = {
  async get<T>(url: string, params = {}): Promise<T> {
    const res = await axios.get<T>(`${apiUrl}${url}`, { ...params });

    return res.data;
  },
  async post<B, T>(url: string, body: B, params = {}): Promise<T> {
    const res = await axios.post(`${apiUrl}${url}`, body, { ...params });

    return res.data;
  },
  async put<B, T>(url: string, body: B, params = {}): Promise<T> {
    const res = await axios.put(`${apiUrl}${url}`, body, { ...params });

    return res.data;
  }
};

export const useLogin = () =>
  useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: Login) => api.post<Login, {
      access_token: string,
      user: User
    }>(authorizationRoutes.login(), data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });


export const useGetUser = () => {
  const token = useToken();

  return useQuery({
    queryKey: ["user", token],
    queryFn: () => api.get<User>(authorizationRoutes.root, { headers: { Authorization: `Bearer ${token}` } })
  });
};

export const useUpdateUser = (userId: number) => {
  const token = useToken();

  return useMutation({
    mutationKey: ["user", userId],
    mutationFn: (newUser: UpdateUserDto) => api.put<UpdateUserDto, User>(userRoutes.updateUser(userId), newUser, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });
};

export const useGetDailyStats = (userId: number | undefined) => {
  const token = useToken();

  return useQuery({
    queryKey: ["stats", token],
    queryFn: userId ? () => api.get<DailyStats>(consumedProductsRoutes.dailyStats(userId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
    enabled: !!userId
  });
};

