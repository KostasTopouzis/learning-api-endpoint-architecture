# API Endpoint Design & Architecture Resources

## Knowledge

### How the web communicates (foundations)
- [MDN: How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
  Beginner-friendly walk-through of DNS → TCP/IP → HTTP → packets, using a house/shop analogy. Use for: the big-picture journey of a request.
- [MDN: Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
  Client-server model, statelessness, proxies, request/response parts. Use for: first-principles HTTP.
- [MDN: HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)
  Exact structure of request/response messages (start line, headers, blank line, body) and HTTP/2 framing. Use for: message anatomy.
- [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) and [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
  Reference tables incl. safe / idempotent / cacheable properties. Use for: choosing methods and status codes.
- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
  The IETF standard itself (June 2022). Use for: settling any argument about what a method or status code *means*.
- [High Performance Browser Networking (Ilya Grigorik, free online)](https://hpbn.co/)
  TCP, TLS, HTTP/1.1, HTTP/2, browser networking in depth. 2013 base text, so check freshness. Use for: latency, connections, performance.
- [Julia Evans: HTTP: Learn your browser's language (zine)](https://wizardzines.com/zines/http/)
  Illustrated, very approachable. Use for: intuition and memorable visuals.
- [Chrome DevTools: Network panel](https://developer.chrome.com/docs/devtools/network)
  Use for: inspecting real requests from your own apps.

### API design guidelines (professional style guides)
- [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
  Opinionated, rule-by-rule REST guide (MUST/SHOULD/MAY). Use for: naming, errors, pagination, compatibility.
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)
  Azure / Microsoft Graph standards. Use for: a second opinion on the same decisions.
- [Google AIP-121: Resource-oriented design](https://google.aip.dev/121)
  Resources first, standard methods (AIP-131..135), custom methods (AIP-136). Use for: modelling resources.
- [Roy Fielding's dissertation, ch. 5: REST](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
  The original definition of REST constraints. Use for: what REST actually is (vs. "JSON over HTTP").

### Other API styles
- [GraphQL: Learn](https://graphql.org/learn/) — official intro. Use for: schema, queries, mutations.
- [gRPC: Introduction](https://grpc.io/docs/what-is-grpc/introduction/) — official intro. Use for: RPC, protobuf contracts.

### Your stack
- [Vercel Functions docs](https://vercel.com/docs/functions)
  Function signature (Web `Request` → `Response`), lifecycle, Fluid compute, regions. Use for: Marquee Moon's serverless layer.
- [Next.js: Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers) and [Next.js: Backend for Frontend guide](https://nextjs.org/docs/app/guides/backend-for-frontend)
  Use for: The Edit's API layer.
- [TMDB: Application authentication](https://developer.themoviedb.org/docs/authentication-application) and [TMDB: Getting started](https://developer.themoviedb.org/reference/intro/getting-started)
  API key vs Bearer token, base URL `https://api.themoviedb.org/3`. Use for: Marquee Moon's upstream API.
- [Prisma Postgres docs](https://www.prisma.io/docs/postgres) and [Prisma ORM docs](https://www.prisma.io/docs/orm)
  The Edit's intended database and data layer. Use for: connecting The Edit, schema/queries behind its endpoints.
- [Prisma: Next.js guide](https://www.prisma.io/docs/guides/frameworks/nextjs)
  Use for: wiring Prisma into Next.js Route Handlers on Vercel (relevant to The Edit's current connection problem).
- [Supabase: REST API guide](https://supabase.com/docs/guides/api)
  Auto-generated REST over Postgres. Use for: contrast ("a database that *is* an API") and the learner's other Supabase work.

## Wisdom (Communities)
- [Vercel Community forum](https://community.vercel.com/)
  Official, active, has Supabase and Functions tags. Use for: deployment/function questions about your real projects.
- [r/webdev](https://www.reddit.com/r/webdev/) and [r/node](https://www.reddit.com/r/node/)
  Large general communities. Use for: design critiques ("how would you structure these endpoints?").
- [Prisma Discord](https://pris.ly/discord) and [Prisma GitHub Discussions](https://github.com/prisma/prisma/discussions)
  Official. Use for: Prisma Postgres connection/ORM questions on The Edit.
- Supabase Discord / [r/Supabase](https://www.reddit.com/r/Supabase/)
  Use for: Supabase-specific questions in other projects.

## Gaps
- A high-trust, current resource on **API architecture patterns** (gateways, BFF, rate limiting) beyond vendor docs — to find when we reach that stage.
