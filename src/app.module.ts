import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import { ogmaLoggerConfigAsync } from 'config/ogma-logger.config';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OgmaModule.forRootAsync(ogmaLoggerConfigAsync),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
