import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import helmet from "helmet";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import compression from "compression";

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const isProd = process.env.NODE_ENV === "production";

  // Helmet: disable CSP in dev so GraphQL Playground/Sandbox can load from CDN
  app.use(
    helmet({
      contentSecurityPolicy: isProd ? undefined : false,
      crossOriginEmbedderPolicy: false,
    })
  );

  app.use(compression());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: process.env.API_VERSION || "1",
  });

  const config = new DocumentBuilder()
    .setTitle("CIP Api")
    .setDescription("API documentation")
    .setVersion("1.1")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(PORT);

  console.log(`GraphQL at http://localhost:${PORT}/graphql`);
  console.log(`Swagger at http://localhost:${PORT}/docs`);
}
bootstrap();
