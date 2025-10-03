import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "../controllers/auth.controller";
import { AuthDataClass, AuthSchema } from "../schemas/auth.schema";
import { AuthService } from "../services/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../constants/auth.constants";
import { UsersModule } from "./users.module";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: AuthDataClass.name, schema: AuthSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
