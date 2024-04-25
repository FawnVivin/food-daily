import type { CreateUserDto, CreateVisitorDto } from "@food-daily/shared/types";

export type CreateUserType = CreateUserDto & Omit<CreateVisitorDto, "activity" | "sex" | "target"> & {
  target: string,
  sex: string,
  activity: string
}
