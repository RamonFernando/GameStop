"use client";

import { useMemo } from "react";
import { games } from "@/lib/games";
import { Hero } from "@/components/Hero";
import { GameGrid } from "@/components/GameGrid";
import { useSearch } from "@/contexts/SearchContext";

export default function HomePage() {
  const { query } = useSearch();

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;
    return games.filter((game) => game.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Hero />
      <GameGrid games={filteredGames} />
    </>
  );
}
