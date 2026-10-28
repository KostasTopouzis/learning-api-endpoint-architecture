# Teaching Notes

## Learner
- Aspiring full-stack dev. Projects: **The Edit** (Next.js eshop, Vercel, Prisma PostgreSQL) and **Marquee Moon** (React movie aggregator, TMDB API, adding Vercel Functions).
- Self-rated beginner on servers / internet communication; has built simple endpoints.
- Wants examples in TypeScript / Node. Scope: REST/HTTP, GraphQL, RPC/gRPC, architecture, serverless functions.

## Preferences
- Ground every lesson in Marquee Moon or The Edit.
- (Add more as they come up.)

## Working notes
- The Edit's Prisma Postgres DB is provisioned but the project can't connect to it yet (reported 2026-10-28). Good candidate for a mission-grounded lesson when we reach "where the database fits" (connection strings, env vars, serverless connections). The learner also uses Supabase elsewhere, so Supabase references remain valid.
- Glossary (`reference/glossary.html`) not created yet: per format, only add terms once the learner can use them correctly. Candidate first terms after Lesson 1: request line, status line, header, body, endpoint, stateless.
- Real captured exchange used in Lesson 1: `GET https://api.themoviedb.org/3/movie/603` without auth → `401 Unauthorized` JSON body, via CloudFront (2026-10-28).
- Planned arc (adjust to evidence): 1 HTTP message anatomy → 2 the journey of a request (DNS/TCP/TLS) → 3 an endpoint as Request→Response function; proxying TMDB & hiding secrets → 4 methods & safety/idempotency → 5 status codes & error bodies → 6 resource naming / REST → then auth, pagination, caching, GraphQL/RPC comparison, architecture.
