import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "../controllers/users.controller";
import { UserSchema, UsersDataClass } from "../schemas/users.schema";
import { UsersService } from "../services/users.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UsersDataClass.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
