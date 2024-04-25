import axios from "axios";
import { apiUrl, queryClient } from "@food-daily/mobile/constants";
import { useToken } from "@food-daily/mobile/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";

import { authorizationRoutes, consumedProductsRoutes, productsRoutes, visitorRoutes, waterRoutes } from "./api.routes";

import type {
  ConsumedProduct,
  ConsumedProductDto,
  CreateConsumedProductDto,
  CreateProductDto,
  DailyStats,
  FullUser,
  Login,
  Product,
  RegistrationBody,
  StatsResponse,
  UpdateConsumedProductDto,
  UpdateVisitorDto,
  User, WaterDto, WaterType
} from "@food-daily/shared/types";

export const api = {
  async get<T>(url: string, params = {}): Promise<T> {
    const res = await axios.get<T>(`${apiUrl}${url}`, { ...params });

    return res.data;
  },
  async post<B, T>(url: string, body: B, params = {}): Promise<T> {
    const res = await axios.post<T>(`${apiUrl}${url}`, body, { ...params });

    return res.data;
  },
  async put<B>(url: string, body: B, params = {}): Promise<void> {
    await axios.put(`${apiUrl}${url}`, body, { ...params });
  },
  async delete(url: string, params = {}): Promise<void> {
    await axios.delete(`${apiUrl}${url}`, { ...params });
  }
};

export const useLogin = () => {
  const { changeToken } = useToken();

  return useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: Login) => api.post<Login, {
      access_token: string,
      user: User
    }>(authorizationRoutes.login(), data),
    async onSuccess({ access_token }) {
      await changeToken(access_token);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });
};

export const useRegistration = () => {
  const { changeToken } = useToken();

  return useMutation({
    mutationKey: ["registration"],
    mutationFn: (data: RegistrationBody) => api.post<RegistrationBody, {
      access_token: string,
      user: User
    }>(authorizationRoutes.registration(), data),
    async onSuccess({ access_token }) {
      await changeToken(access_token);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });
};

export const useGetUser = () => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["user", token],
    queryFn: () => api.get<FullUser>(authorizationRoutes.root, { headers: { Authorization: `Bearer ${token}` } })
  });
};

export const useUpdateVisitor = (visitorId: number) => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["user"],
    mutationFn: (newVisitor: UpdateVisitorDto) => api.put<UpdateVisitorDto>(visitorRoutes.updateVisitor(visitorId), newVisitor, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] })
  });
};

export const useGetDailyStats = (visitorId: number | undefined) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["consumedProduct", "stats", token],
    queryFn: visitorId ? () => api.get<DailyStats>(consumedProductsRoutes.dailyStats(visitorId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
    enabled: !!visitorId
  });
};

export const useGetProductsByMeal = (meal: ConsumedProduct["meal"], visitorId?: number) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["consumedProduct", "meal", meal, token],
    queryFn: visitorId ? () => api.get<ConsumedProductDto[]>(consumedProductsRoutes.getProductsByMeal(meal, visitorId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
    enabled: !!visitorId
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
      void queryClient.invalidateQueries({ queryKey: ["consumedProduct", "meal"] }).then(() => queryClient.invalidateQueries({ queryKey: ["consumedProduct", "stats"] }));
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
    onSuccess() {
      void queryClient.invalidateQueries({ queryKey: ["consumedProduct"] })
      void queryClient.invalidateQueries({ queryKey: ["stats"] })
    }

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

export const useUpdateWaterQuantity = () => {
  const { token } = useToken();

  return useMutation({
    mutationKey: ["water"],
    mutationFn: (body: WaterDto) => api.put(waterRoutes.updateWater(), body,{ headers: { Authorization: `Bearer ${token}` } }),
  });
}

export const useGetWaterQuantity = (visitorId:number) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["water", visitorId, token],
    queryFn: () => api.get<WaterType>(waterRoutes.getWaterById(visitorId),{ headers: { Authorization: `Bearer ${token}` } })
  });
}

export const useGetWeeklyStats = (visitorId: number| undefined) => {
  const { token } = useToken();

  return useQuery({
    queryKey: ["stats", visitorId, token],
    queryFn: () => api.get<StatsResponse>(consumedProductsRoutes.getWeeklyStats(visitorId),{ headers: { Authorization: `Bearer ${token}` } })
  });
}