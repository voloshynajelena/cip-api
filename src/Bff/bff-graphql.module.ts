import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
// import { UsersModule } from "../domain/users/users.module";
// import { DepartmentsModule } from "../domain/departments/departments.module";
// import { UsersBffResolver } from "./resolvers/users.bff.resolver";
// import { DepartmentsBffResolver } from "./resolvers/departments.bff.resolver";

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: join(process.cwd(), "schema.gql"),
//       sortSchema: true,
//       playground: process.env.NODE_ENV !== "production",
//       // @ts-ignore
//       context: ({ req }) => ({ req }),
//     }),
//   ],
// })
// export class BffGraphqlModule {}
