import { Controller, Get, Query } from "@nestjs/common";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post("login")
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.signIn(signInDto.email, signInDto.password);
  // }

  @Get("login")
  signIn2(@Query("login") email: string, @Query("pass") password: string) {
    return this.authService.signIn(email, password);
  }
}
