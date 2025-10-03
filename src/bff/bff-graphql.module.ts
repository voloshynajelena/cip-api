import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { PingResolver } from "./resolvers/ping.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "schema.gql"),
      sortSchema: true,
      playground: process.env.NODE_ENV !== "production",
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [PingResolver],
})
export class BffGraphqlModule {}
