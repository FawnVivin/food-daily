import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Visitor } from "@food-daily/api/models";

import { VisitorsService } from "../services";
import { VisitorsController } from "../controllers";


@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  controllers: [VisitorsController],
  providers: [VisitorsService],
  exports: [VisitorsService]
})
export class VisitorModule {
}
