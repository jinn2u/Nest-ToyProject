import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get('/')
    home():string{
        return 'Welcome to my Movie API!'
    }
}
