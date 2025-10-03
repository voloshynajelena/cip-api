# CIP API

Backend for the **CIP** project: NestJS 10, GraphQL (Apollo, code-first), MongoDB (Mongoose), Swagger for REST endpoints.

---

## Tech Stack
- **Runtime:** Node.js 20
- **Framework:** NestJS 10
- **GraphQL:** `@nestjs/graphql` + `@nestjs/apollo` (code-first, auto schema generation)
- **Database:** MongoDB Atlas + Mongoose
- **REST Docs:** Swagger (`/docs`)
- **Security/Performance:** helmet, compression
- **Deploy:** Railway (Backend) + Vercel (Frontend)

---

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Copy env file
cp .env.example .env

# 3) Run in watch mode (development)
npm run start:dev

# or build & run
npm run build && npm run start
```

### `.env.example`
```env
PORT=3000
NODE_ENV=development

# Allowed origins (comma separated)
CORS_ORIGIN=https://cip.vercel.app,http://localhost:3000

# MongoDB Atlas
MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/cip?retryWrites=true&w=majority&appName=cip"

# Auth
JWT_SECRET=change_me

# Swagger
ENABLE_SWAGGER=true
API_VERSION=1
```

---

## Run Modes

```bash
# Development (watch mode, ts-node)
npm run start:dev

# Production (compiled dist)
npm run build
npm run start
npm run start:prod

# Railway production
npm run start:railway
```

---

## Endpoints

- **GraphQL Playground / Apollo Sandbox:** `GET /graphql`
    - Enabled if `NODE_ENV !== production`
    - Test query:
      ```graphql
      query { ping }
      ```
- **REST Healthcheck:** `GET /health` → `{ "status": "ok" }`
- **Swagger Docs:** `GET /docs`
    - Enabled with `ENABLE_SWAGGER=true`
    - REST versioning: `/v1/*`

---

## NPM Scripts

```bash
# Code formatting
npm run format

# Linting
npm run lint

# Tests
npm run test         # unit
npm run test:e2e     # e2e
npm run test:cov     # coverage
```

---

## Project Structure (simplified)

```
src/
  app.module.ts
  main.ts

  bff/
    bff-graphql.module.ts
    resolvers/
      ping.resolver.ts      # minimal Query

  health/
    health.controller.ts    # /health endpoint

  common/                   # interfaces / shared types
  dto/                      # DTOs
  schemas/                  # Mongoose schemas
  services/                 # business logic
  controllers/              # REST controllers
```

---

## Deploy on Railway (Production)

1. Connect GitHub repo to Railway → “Deploy from GitHub”.
2. Add environment variables:
    - `MONGODB_URI` — Atlas connection string
    - `CORS_ORIGIN` — e.g. `https://cip.vercel.app`
    - `JWT_SECRET` — production secret
    - `NODE_ENV=production`
    - `ENABLE_SWAGGER=false` (recommended in prod)
    - `API_VERSION=1`
3. Configure build & start:
    - **Build:** `npm run build`
    - **Start:** `npm run start:railway`
4. Verify:
    - `GET /health` → `{ status: "ok" }`
    - `POST /graphql` (Playground disabled in prod)

---

## Common Issues

- **MongoDB: “Unable to connect to the database”**
    - Check `MONGODB_URI` (correct user/password, URL-encode special chars).
    - In Atlas → *Network Access* → allow `0.0.0.0/0` or proper IPs.
    - Update Mongoose if needed:
      ```bash
      npm i mongoose@^8 @nestjs/mongoose@^10
      ```

- **GraphQL: `Query root type must be provided.`**
    - At least one `@Query` resolver is required (see `ping.resolver.ts`).

- **CORS issues**
    - Add your frontend domains in `CORS_ORIGIN` (comma separated).

---

## License
MIT
