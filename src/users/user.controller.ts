import { Controller, Get, Res } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {}

  @Get('viewLogs')
  async viewLogs(){
    return await this.usersService.logs()
  }
}

