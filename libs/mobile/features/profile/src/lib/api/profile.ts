import { useMutation } from "@tanstack/react-query";
import { api, userRoutes } from "@food-daily/mobile/api";
import { useToken } from "@food-daily/mobile/hooks";

import type { UpdateUserDto, User } from "@food-daily/shared/types";
import { queryClient } from "@food-daily/mobile/constants";

export const useUpdateUser = (userId: number) => {
  const token = useToken();

  return useMutation({
    mutationKey: ["user", userId],
    mutationFn: (newUser: UpdateUserDto) => api.put<UpdateUserDto, User>(userRoutes.updateUser(userId), newUser, { headers: { Authorization: `Bearer ${token}` } }),
    onSuccess:()=>queryClient.invalidateQueries({ queryKey: ['user'] })
  });
};
