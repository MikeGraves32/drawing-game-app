"use client";

import { useState } from "react";
import FlipCard from "@/app/components/FlipCard";
// import FlipCard from "@/app/components/GrammarCard";
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
  const [buttonText, setButtonText] = useState<string>("Start the Game");

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
    setTimeout(() => setFlipped(true), 5000); // delay for flip
    setButtonText("Next Round");
  };

  return (
    <main style={{ padding: ".5rem" }}>
      <h1>Grammar Flip Cards</h1>
      <button
        onClick={startRound}
        style={{
          padding: "10px 20px",
          marginBottom: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
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
