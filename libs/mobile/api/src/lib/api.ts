import axios from "axios";
import { apiUrl, queryClient } from "@food-daily/mobile/constants";
import { useToken } from "@food-daily/mobile/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";

import { authorizationRoutes, consumedProductsRoutes, productsRoutes, userRoutes } from "./api.routes";

import type {
  ConsumedProduct,
  ConsumedProductDto,
  CreateConsumedProductDto,
  CreateProductDto, CreateUserDto,
  DailyStats,
  Login,
  Product,
  UpdateConsumedProductDto,
  UpdateUserDto,
  User
} from "@food-daily/shared/types";

export const api = {
  async get<T>(url: string, params = {}): Promise<T> {
    const res = await axios.get<T>(`${apiUrl}${url}`, { ...params });

    return res.data;
  },
  async post<B, T>(url: string, body: B, params = {}): Promise<T> {
    const res = await axios.post(`${apiUrl}${url}`, body, { ...params });

    return res.data;
  },
  async put<B>(url: string, body: B, params = {}): Promise<void> {
    const res = await axios.put(`${apiUrl}${url}`, body, { ...params });

    return res.data;
  },
  async delete(url: string, params = {}): Promise<void> {
    const res = await axios.delete(`${apiUrl}${url}`, { ...params });
  }
};

export const useLogin = () => {
  const { changeToken, token } = useToken();
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: Login) => api.post<Login, {
      access_token: string,
      user: User
    }>(authorizationRoutes.login(), data),
    onSuccess: async ({ access_token }) => {
      await changeToken(access_token);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });
};

export const useRegistration = () => {
  const { changeToken, token } = useToken();
  return useMutation({
    mutationKey: ["registration"],
    mutationFn: (data: CreateUserDto) => api.post<CreateUserDto, {
      access_token: string,
      user: User
    }>(authorizationRoutes.registration(), data),
    onSuccess: async ({ access_token }) => {
      await changeToken(access_token);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });
};
export const useGetUser = () => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["user", token],
    queryFn: () => api.get<User>(authorizationRoutes.root, { headers: { Authorization: `Bearer ${token}` } })
  });
};

export const useGetUserById = (userId:number|undefined) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["user",userId, token],
    queryFn: () => api.get<User>(`${userRoutes.root}/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
  ,enabled:!!userId
  });
};


export const useUpdateUser = (userId: number) => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["user"],
    mutationFn: (newUser: UpdateUserDto) => api.put<UpdateUserDto>(userRoutes.updateUser(userId), newUser, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });
};

export const useGetDailyStats = (userId: number | undefined) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["consumedProduct", "stats", token],
    queryFn: userId ? () => api.get<DailyStats>(consumedProductsRoutes.dailyStats(userId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
    enabled: !!userId
  });
};

export const useGetProductsByMeal = (meal: ConsumedProduct["meal"], userId?: number) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["consumedProduct", "meal", meal, token],
    queryFn: userId ? () => api.get<ConsumedProductDto[]>(consumedProductsRoutes.getProductsByMeal(meal, userId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
    enabled: !!userId
  });
};

export const useGetConsumedProductsById = (productId: number) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["consumedProduct", token, productId],
    queryFn: () => api.get<ConsumedProductDto>(consumedProductsRoutes.getProductById(productId), { headers: { Authorization: `Bearer ${token}` } })

  });
};

export const useDeleteConsumedProduct = (productId: number) => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["consumedProduct", "delete", productId],
    mutationFn: () => api.delete(consumedProductsRoutes.delete(productId), { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["consumedProduct", "meal"] }).then(() => queryClient.invalidateQueries({ queryKey: ["consumedProduct", "stats"] }));
    }
  });
};

export const useUpdateConsumedProduct = (productId: number) => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["consumedProduct", "update", productId],
    mutationFn: (newProduct: UpdateConsumedProductDto) => api.put<UpdateConsumedProductDto>(consumedProductsRoutes.update(productId), newProduct, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["consumedProduct"] })
  });
};

export const useCreateConsumedProduct = () => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["consumedProduct", "create"],
    mutationFn: (newProduct: CreateConsumedProductDto) => api.post<CreateConsumedProductDto, void>(consumedProductsRoutes.create(), newProduct, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["consumedProduct"] })

  });
};

export const useGetProduct = (productId: number) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["product", productId, token],
    queryFn: () => api.get<Product>(productsRoutes.getProductById(productId), { headers: { Authorization: `Bearer ${token}` } })
  });
};

export const useDeleteProduct = (productId: number) => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["product"],
    mutationFn: () => api.delete(productsRoutes.deleteProduct(productId), { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });
};

export const useCreateProduct = () => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["product"],
    mutationFn: (newProduct: CreateProductDto) => api.post<CreateProductDto, void>(productsRoutes.createProduct(), newProduct, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });
};

export const useGetAllProducts = () => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["products", "all", token],
    queryFn: () => api.get<Product[]>(productsRoutes.getAllProducts(), { headers: { Authorization: `Bearer ${token}` } })
  });
};


