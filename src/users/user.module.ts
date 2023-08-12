import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';


import { OgmaModule, OgmaService } from '@ogma/nestjs-module';
import { OgmaProviderOptions } from '@ogma/nestjs-module/src/interfaces/ogma-provider-options.interface';

@Module({
  imports: [
    OgmaModule.forFeature(UsersService.name)

  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
