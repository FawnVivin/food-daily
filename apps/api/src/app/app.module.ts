import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  imports: [
    // eslint-disable-next-line new-cap,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    ConfigModule.forRoot({
      load: [()=>({host: "192.168.31.56"})]
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

