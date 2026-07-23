# Flowstate Design

Marketing site for **Flowstate Design** (`flowstate-design.co`) — calm, conversion-focused web design for local businesses, startups, and creatives.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- next-intl (EN / FR)
- Framer Motion
- Netlify (`@netlify/plugin-nextjs`)
- Contact form → `/api/contact` (Resend when configured)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm test` | Unit tests (Vitest) |
| `npx playwright test` | Smoke e2e tests |

## Environment

Copy `.env.example` to `.env.local`:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@flowstate-design.co
CONTACT_FROM_EMAIL=Flowstate Design <onboarding@resend.dev>
```

Without `RESEND_API_KEY`, contact submissions log to the server and still return success (dev mode).

## Deploy

Connect this repo to Netlify. Build uses `netlify.toml` + `@netlify/plugin-nextjs`. Set the env vars above for production email delivery.
