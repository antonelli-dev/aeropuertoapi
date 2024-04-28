import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dtos/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post("login")
  @HttpCode(200)
  async login(@Body() dto: LoginRequestDto) {
    return  await this._authService.loginUser(dto.nombre, dto.password);
  }
}
