import type { CreateUserDto } from "@food-daily/shared/types";

export type CreateUserType = Omit<CreateUserDto, "activity" | "sex" | "target"> & {
  target: string,
  sex: string,
  activity: string
}
