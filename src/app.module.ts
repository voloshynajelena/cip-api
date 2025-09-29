import { Module } from "@nestjs/common";
import { ClientsModule } from "./Modules/clients.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./Modules/auth.module";
import { UsersModule } from "./Modules/users.module";
import { ConfigModule } from "@nestjs/config";
// import { BffGraphqlModule } from "./Bff/bff-graphql.module";

require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot(<string>process.env["MONGODB_URI"]),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ClientsModule,
  ],
  providers: [],
})
export class AppModule {}
