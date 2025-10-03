import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth.module";
import { UsersModule } from "./modules/users.module";
import { ConfigModule } from "@nestjs/config";
import { BffGraphqlModule } from "./bff/bff-graphql.module";

require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot(<string>process.env["MONGODB_URI"]),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    BffGraphqlModule,
  ],
  providers: [],
})
export class AppModule {}
