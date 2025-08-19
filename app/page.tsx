"use client";

import { useEffect, useState } from "react";
import FlipCard from "@/app/components/FlipCard";
import Image from "next/image"; // Assuming you're using next/image
import Button from "@/app/components/Button/Button";
import GrammarGoneWild from "@/public/img/grammar-gone-wild.png";
// import FlipCard from "@/app/components/GrammarCard";
import nouns from "@/public/data/nouns.json";
import verbs from "@/public/data/verbs.json";
import prepositions from "@/public/data/prepositions.json";
import adverbs from "@/public/data/adverbs.json";

// const Image = NextImage;

interface WordItem {
  category: string;
  grammarType: string;
  text: string;
}

export default function HomePage() {
  const [flipped, setFlipped] = useState(false);
  const [selectedCards, setSelectedCards] = useState<WordItem[]>([]);
  const [buttonText, setButtonText] = useState<string>("Start the Game");
  const [timer, setTimer] = useState<number>(120);
  const [isRoundActive, setIsRoundActive] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(true);

  useEffect(() => {
    if (isRoundActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsRoundActive(false);
    }
  }, [timer, isRoundActive]);

  const totalSeconds = timer; // Example: 2 minutes and 30 seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

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
    setShowImage(false);
    setFlipped(false);
    setTimeout(() => setFlipped(true), 1000); // delay for flip
    setTimer(120);
    setIsRoundActive(true);
    setButtonText("Next Round");
  };

  return (
    <main style={{ padding: ".5rem" }}>
      <h1>Grammar Flip Cards</h1>
      <Button
        label={buttonText}
        onClick={startRound}
        style={{
          padding: "10px 20px",
          marginBottom: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      ></Button>
      <div>
        <span className="ml-auto font-semibold">
          ⏱ {formattedMinutes}:{formattedSeconds}
        </span>
      </div>
      {/* <span>
        {formattedMinutes}:{formattedSeconds}
      </span> */}
      {showImage && (
        <Image
          src={GrammarGoneWild} // Replace with your image path
          alt="Game Cover"
          width={500}
          height={300}
        />
      )}
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
