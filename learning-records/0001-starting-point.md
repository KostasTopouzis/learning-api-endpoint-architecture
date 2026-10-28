# Starting point: endpoint builder without a model of HTTP

The learner has shipped full-stack apps (Next.js on Vercel + Supabase; JS frontend + Python serverless functions) and built simple endpoints, but self-reports a beginner-level understanding of how servers, internet communication, and API architecture work. Teaching should therefore start from the HTTP message itself, not from REST conventions, and connect every concept back to code they already write.

**Evidence**: Self-reported at onboarding (2026-10-28); gap surfaced while adding Vercel Functions to Marquee Moon.

**Implications**: Don't assume knowledge of headers, status codes, DNS, or what a "function" does with a request. Do assume comfort with React, `fetch()`, deploying to Vercel, and reading TypeScript.
