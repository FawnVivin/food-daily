import { CreateUserDto } from "@food-daily/shared/types";

export type CreateUserType = Omit<CreateUserDto, "target" | "activity" | "sex"> & {
  target: string,
  sex: string,
  activity: string
}
