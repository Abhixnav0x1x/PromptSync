-- Enable required extensions
create extension if not exists pgcrypto;

-- LLMs table per user
create table if not exists public.llms (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  model_name text not null,
  api_key text not null,
  nickname text,
  created_at timestamptz not null default now()
);

-- RLS
alter table public.llms enable row level security;

-- Policies (idempotent)
drop policy if exists "Allow users to read own llms" on public.llms;
create policy "Allow users to read own llms" on public.llms
  for select using (auth.uid() = user_id);

drop policy if exists "Allow users to insert own llms" on public.llms;
create policy "Allow users to insert own llms" on public.llms
  for insert with check (auth.uid() = user_id);

drop policy if exists "Allow users to update own llms" on public.llms;
create policy "Allow users to update own llms" on public.llms
  for update using (auth.uid() = user_id);

drop policy if exists "Allow users to delete own llms" on public.llms;
create policy "Allow users to delete own llms" on public.llms
  for delete using (auth.uid() = user_id);

-- Conversations table per user
create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt text not null,
  results jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.conversations enable row level security;

drop policy if exists "Allow users to read own conversations" on public.conversations;
create policy "Allow users to read own conversations" on public.conversations
  for select using (auth.uid() = user_id);

drop policy if exists "Allow users to insert own conversations" on public.conversations;
create policy "Allow users to insert own conversations" on public.conversations
  for insert with check (auth.uid() = user_id);

drop policy if exists "Allow users to delete own conversations" on public.conversations;
create policy "Allow users to delete own conversations" on public.conversations
  for delete using (auth.uid() = user_id);
