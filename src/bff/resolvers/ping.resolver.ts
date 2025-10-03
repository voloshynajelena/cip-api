import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class PingResolver {
  @Query(() => String, { description: "Simple health check for GraphQL" })
  ping(): string {
    return "pong";
  }
}
