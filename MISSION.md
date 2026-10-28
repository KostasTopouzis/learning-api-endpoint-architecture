# Mission: API Endpoint Design & Architecture

## Why
Move from "I can make a simple endpoint work" to designing and shipping backend APIs at a professional level, as a full-stack developer. The trigger: while adding Vercel serverless functions to **Marquee Moon** (React movie aggregator over TMDB's API), it became clear that the underlying model of how web communication and API architecture work is missing.

## Success looks like
- Can explain, step by step, what happens between a browser `fetch()` and a function's response: DNS, connection, HTTP request/response messages.
- Marquee Moon calls TMDB through its own Vercel Functions, with the API key kept server-side and well-designed endpoints, status codes and errors.
- The Edit (Next.js + Prisma PostgreSQL eshop on Vercel) has a deliberate API layer: resource naming, validation, auth, pagination, and consistent error responses.
- Can choose between REST, GraphQL, RPC/gRPC, and serverless functions for a given problem, and defend the choice.
- Can describe the architecture around endpoints: gateways/BFFs, caching, rate limiting, auth, and where the database fits.

## Constraints
- Beginner-level grasp of servers and internet communication; basic hands-on endpoint experience.
- Code examples in **TypeScript / Node** (Next.js Route Handlers, Vercel Functions).
- Prior stack also includes Python serverless functions; this is useful contrast, not the focus.

## Out of scope (for now)
- Frontend/UI design, deep database internals (until the API layer needs them), DevOps beyond Vercel deployment.
