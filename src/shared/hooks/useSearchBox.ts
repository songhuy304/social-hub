"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

type UseSearchBoxOptions = {
  maxHistory?: number;
  onNavigate?: (query: string) => void;
};

export function useSearchBox(options: UseSearchBoxOptions = {}) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const maxHistory = options.maxHistory ?? 10;
  const router = useRouter();

  const addToHistory = useCallback(
    (searchQuery: string) => {
      const trimmed = searchQuery.trim();
      if (!trimmed) return;

      setHistory((prev) => {
        const filtered = prev.filter(
          (item) => item.toLowerCase() !== trimmed.toLowerCase()
        );
        return [trimmed, ...filtered].slice(0, maxHistory);
      });
    },
    [maxHistory]
  );

  const removeHistoryItem = useCallback((index: number) => {
    setHistory((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const handleSubmit = useCallback(
    (searchQuery?: string) => {
      const queryToSubmit = (searchQuery || query).trim();
      if (!queryToSubmit) return;

      addToHistory(queryToSubmit);

      if (options.onNavigate) {
        options.onNavigate(queryToSubmit);
      } else {
        router.push(`/?q=${encodeURIComponent(queryToSubmit)}`);
      }

      setQuery("");
    },
    [query, addToHistory, options, router]
  );

  const selectFromHistory = useCallback((historyItem: string) => {
    setQuery(historyItem);
  }, []);

  return {
    query,
    history,
    hasHistory: history.length > 0,

    setQuery,
    handleSubmit,
    addToHistory,
    removeHistoryItem,
    clearHistory,
    selectFromHistory,
  };
}
