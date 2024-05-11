/* eslint-disable prettier/prettier */
import {
  Controller,
  UseGuards,
  Post,
  Request,
  Response,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { 'logged in': true };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  authTest(@Request() req): any {
    return { access: true };
  }
  @Get('logout')
  async logout(@Request() request): Promise<any> {
    request.session.destroy(() => {
      return {
        message: 'Logout successful',
      };
    });
    return {
      message: 'Logout successful',
    };
  }
}
