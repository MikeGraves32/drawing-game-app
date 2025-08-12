"use client";

import { useState } from "react";
import FlipCard from "@/app/components/FlipCard";
import nouns from "@/public/data/nouns.json";
import verbs from "@/public/data/verbs.json";
import prepositions from "@/public/data/prepositions.json";
import adverbs from "@/public/data/adverbs.json";

interface WordItem {
  category: string;
  grammarType: string;
  text: string;
}

export default function HomePage() {
  const [flipped, setFlipped] = useState(false);
  const [selectedCards, setSelectedCards] = useState<WordItem[]>([]);

  const getRandomItem = (arr: WordItem[]): WordItem =>
    arr[Math.floor(Math.random() * arr.length)];

  const startRound = () => {
    const picks = [
      getRandomItem(nouns),
      getRandomItem(verbs),
      getRandomItem(prepositions),
      getRandomItem(adverbs),
    ];
    setSelectedCards(picks);
    setFlipped(false);
    setTimeout(() => setFlipped(true), 3000); // delay for flip
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Grammar Flip Cards</h1>
      <button
        onClick={startRound}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Start
      </button>

      <div style={{ display: "flex", gap: "40px" }}>
        {selectedCards.map((card, idx) => (
          <FlipCard
            key={idx}
            category={card.category}
            grammarType={card.grammarType}
            text={card.text}
            flipped={flipped}
          />
        ))}
      </div>
    </main>
  );
}
