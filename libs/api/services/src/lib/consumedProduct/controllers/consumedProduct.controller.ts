import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateConsumedProductDto, Role, UpdateConsumedProductDto } from "@food-daily/shared/types";

import { ConsumedProductsService } from "../services";
import { HasRole } from "../../authorization/decorators";
import { JwtAuthGuard } from "../../authorization/guards";

import type { ConsumedProduct } from "@food-daily/api/models";

@Controller("consumedProducts")
export class ConsumedProductsController {
  constructor(private readonly consumedProductsService: ConsumedProductsService) {
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() consumedProductDto: CreateConsumedProductDto) {
    return this.consumedProductsService.create(consumedProductDto);
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async updateWeight(@Param("id") id: number, @Body() param: UpdateConsumedProductDto) {
    return this.consumedProductsService.updateWeight(id, param.weight);
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOneById(@Param("id") id: number) {
    return this.consumedProductsService.findOneById(id);
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.consumedProductsService.remove(id);
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Get("stats/:userId")
  async getDailyStats(@Param("userId") userId: number) {
    return this.consumedProductsService.getDailyStats(userId);
  }
  
  @Get("weeklyStats/:userId")
  async getWeeklyStats(@Param("userId") userId: number) {
    return this.consumedProductsService.getWeeklyStats(userId);
  }
  
  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Get(":meal/:userId")
  async findAllByMeal(@Param("userId") userId: number, @Param("meal") meal: ConsumedProduct["meal"]) {

    return this.consumedProductsService.findAllByMeal(meal, userId);
  }
}
