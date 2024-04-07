import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsumedProduct, Product, User, Water } from "@food-daily/api/models";
import { services } from "@food-daily/api/configs";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() => ({ host: "192.168.31.56" })]
    }),
    ...services,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3305,
      username: "root",
      password: "root",
      database: "food-daily",
      entities: [User, Product, ConsumedProduct, Water],
      synchronize: true
    })
  ]
})
export class AppModule {
}

