"use client";
import { create } from "zustand";
import type { LLM } from "@/types";

type ResponseStatus = "idle" | "loading" | "success" | "error";

export type LLMResponse = {
  id: string; // llm id
  model_name: string;
  nickname?: string | null;
  status: ResponseStatus;
  content?: string;
  error?: string;
};

type State = {
  llms: LLM[];
  setLLMs: (v: LLM[]) => void;
  responses: Record<string, LLMResponse>; // keyed by llm id
  setResponse: (id: string, r: Partial<LLMResponse>) => void;
  selectedLLMIds: string[]; // which LLMs should answer
  setSelectedLLMIds: (ids: string[]) => void;
  promptBoostLLMId: string | null;
  setPromptBoostLLMId: (id: string | null) => void;
};

export const useAppStore = create<State>((set) => ({
  llms: [],
  setLLMs: (v) => set({ llms: v }),
  responses: {},
  setResponse: (id, r) =>
    set((s) => ({
      responses: {
        ...s.responses,
        [id]: { ...(s.responses[id] ?? { id, status: "idle" }), ...r },
      },
    })),
  selectedLLMIds: [],
  setSelectedLLMIds: (ids) => set({ selectedLLMIds: ids }),
  promptBoostLLMId: null,
  setPromptBoostLLMId: (id) => set({ promptBoostLLMId: id }),
}));
