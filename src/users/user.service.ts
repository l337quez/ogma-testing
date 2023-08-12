import {
    BadRequestException,
    ConflictException,
    Inject,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import {  OgmaLogger, OgmaService } from '@ogma/nestjs-module';
  
  @Injectable()
  export class UsersService  {
    constructor(
      @OgmaLogger(UsersService) private readonly logger: OgmaService 
    ) { }

    async logs(){
        this.logger.error(` testing logs`);
    }
}