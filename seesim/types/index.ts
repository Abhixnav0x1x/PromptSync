export type LLM = {
  id: string;
  user_id: string;
  model_name: string;
  api_key: string; // stored plaintext in DB
  nickname?: string | null;
  created_at?: string;
};

export type LLMInput = {
  model_name: string;
  api_key: string;
  nickname?: string;
};
