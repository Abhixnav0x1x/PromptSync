# PromptSync

Compare LLM responses side-by-side with a clean, responsive UI. Built with Next.js App Router, TailwindCSS v4, Supabase, and Zustand.

## Tech Stack

- Next.js (App Router)
- TailwindCSS v4
- Supabase (Auth + Postgres)
- Zustand state management

## Features

- Email/password auth via Supabase
- Add multiple OpenRouter-compatible LLMs (model + API key + optional nickname)
- API keys are encrypted at rest server-side
- Send one prompt to all configured models and view responses in a grid
- Per-model status badges and copy-to-clipboard

## Quick Start (Local Development)

1) Install dependencies

```bash
npm install
```

2) Configure environment

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These variables are required for Supabase Auth and database.

3) Setup database (Supabase)

- In the Supabase SQL editor, run the `supabase.sql` file at the project root to create tables and RLS policies used by PromptSync.

4) Run the dev server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## App Routes

- `/` → redirects to `/dashboard` if logged in, else `/login`
- `/login`, `/signup` → authentication pages
- `/dashboard` → main app (LLM list, Add LLM modal, prompt + responses)

## Deploying to GitHub

1) Initialize a repo (if not already) and commit your changes

```bash
git init
git add .
git commit -m "chore: initialize PromptSync"
git branch -M main
```

2) Create a new repository on GitHub (via GitHub UI), then add the remote and push

```bash
git remote add origin https://github.com/<your-username>/promptsync.git
git push -u origin main
```

The included `.gitignore` ensures environment files (e.g. `.env.local`) and build artifacts are not committed.

## Deploying the App

- Vercel: Import the GitHub repo into Vercel. Set the environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the project settings. Build command is the default for Next.js (no custom settings required).
- Netlify: Use Next.js runtime; set the same environment variables in the Netlify site settings. Publish directory is `.next` output handled by the adapter.

## Security Notes

- Do not commit secrets. The `.gitignore` is configured to ignore `.env*` files. Add your keys only in your local environment or in your hosting provider’s environment settings.
- Supabase Row Level Security (RLS) is crucial. Make sure you apply the policies from `supabase.sql` and verify only authenticated users can access their own data.

## License

MIT — see `LICENSE` (add one if needed).
