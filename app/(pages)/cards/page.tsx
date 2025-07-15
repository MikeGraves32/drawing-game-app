"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import classNames from "classnames";

interface NounWord {
  category: string;
  grammarType: string;
  text: string;
}

interface VerbWord {
  category: string;
  grammarType: string;
  text: string;
}

interface PrepositionWord {
  category: string;
  grammarType: string;
  text: string;
}

interface AdverbWord {
  category: string;
  grammarType: string;
  text: string;
}
const colors = ["bg-red-500", "bg-green-500", "bg-blue-500"];
const categories = ["all", "Common Noun", "Action Verb", "Adverbs"];

export default function CardPage() {
  const nounFiles = [
    "/references/nouns/nouns-animals.json",
    "/references/nouns/nouns-buildings.json",
    "/references/nouns/nouns-clothing.json",
    "/references/nouns/nouns-food-drink.json",
    "/references/nouns/nouns-household-items.json",
  ];
  const verbFiles = [
    "/references/verbs/verbs-communication.json",
    "/references/verbs/verbs-cooking-food.json",
    "/references/verbs/verbs-creative-arts.json",
    "/references/verbs/verbs-daily-activities.json",
    "/references/verbs/verbs-emotions.json",
  ];
  const prepositionFiles = [
    "/references/prepositions/preprosition-condition.json",
    "/references/prepositions/preprosition-direction-movement.json",
    "/references/prepositions/preprosition-location-physical.json",
    "/references/prepositions/preprosition-mannerism.json",
    "/references/prepositions/preprosition-materials.json",
  ];
  const adverbFiles = [
    "/references/adverbs/adverbs-balance.json",
    "/references/adverbs/adverbs-body-movement.json",
    "/references/adverbs/adverbs-climbing-descending.json",
    "/references/adverbs/adverbs-contact.json",
    "/references/adverbs/adverbs-direction.json",
  ];
  const [dataSets, setDataSets] = useState<NounWord[][]>([[], [], [], []]);
  const [flipped, setFlipped] = useState<boolean[][]>([[], [], []]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [timer, setTimer] = useState<number>(120);
  const [isRoundActive, setIsRoundActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [selectedNoun, SetSelectedNoun] = useState("");
  const [selectedVerb, SetSelectedVerb] = useState("");
  const [selectedPreposition, SetSelectedPreposition] = useState("");
  const [selectedAdverb, SetSelectedAdverb] = useState("");

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

  const fetchData = async () => {
    const allData = await Promise.all(
      nounFiles.map(async (file) => {
        const res = await fetch(file);
        const json: NounWord[] = await res.json();
        console.log("JSON from TypeScript!: " + json);
        const filtered =
          selectedCategory === "all"
            ? json
            : json.filter((w) => w.category === selectedCategory);
        return filtered.sort(() => 0.5 - Math.random()).slice(0, 6);
      })
    );
    setDataSets(allData);
    setFlipped(allData.map((set) => Array(set.length).fill(false)));
    setTimer(120);
    setIsRoundActive(true);
    setScore(0);
  };

  const toggleFlip = (i: number, j: number) => {
    if (!isRoundActive || flipped[i][j]) return;
    const newFlipped = [...flipped];
    newFlipped[i][j] = true;
    setFlipped(newFlipped);
    setScore((prev) => prev + 1);
  };

  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <div className="mb-4 flex items-center gap-4">
        <select
          className="border border-gray-400 px-2 py-1 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <Button onClick={fetchData}>Start Round</Button>
        <span className="ml-auto font-semibold">⏱ {timer}s</span>
        <span className="ml-4 font-semibold">Score: {score}</span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {dataSets.map((set, i) => (
          <div key={i} className="space-y-4">
            {set.map((entry, j) => (
              <div
                key={j}
                onClick={() => toggleFlip(i, j)}
                className={classNames("cursor-pointer h-24 w-full perspective")}
              >
                <div
                  className={classNames(
                    "relative h-full w-full duration-500 transform-style-preserve-3d",
                    flipped[i][j] ? "rotate-y-180" : ""
                  )}
                >
                  <Card
                    className={classNames(
                      "absolute w-full h-full backface-hidden",
                      colors[i]
                    )}
                  >
                    <CardContent className="flex items-center justify-center h-full text-white text-xl">
                      {entry.category}
                    </CardContent>
                  </Card>
                  <Card className="absolute w-full h-full rotate-y-180 backface-hidden bg-white">
                    <CardContent className="flex items-center justify-center h-full text-xl">
                      {entry.text}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {!isRoundActive && timer === 0 && (
        <div className="mt-8 text-center text-lg font-semibold text-red-600">
          ⏳ <p>Time is up! Final Score: {score}</p>
        </div>
      )}
    </main>
  );
}

//   export default function GamePlay() {
//     const [dataSets, setDataSets] = useState<WordEntry[][]>([[], [], []]);
//     const [flipped, setFlipped] = useState<boolean[][]>([[], [], []]);
//     const [selectedCategory, setSelectedCategory] = useState<string>("all");
//     const [timer, setTimer] = useState<number>(120);
//     const [isRoundActive, setIsRoundActive] = useState<boolean>(false);
//     const [score, setScore] = useState<number>(0);
//     const [selectedNoun, SetSelectedNoun] = useState("");
//     const [selectedVerb, SetSelectedVerb] = useState("");
//     const [selectedPreposition, SetSelectedPreposition] = useState("");
//     const [selectedAdverb, SetSelectedAdverb] = useState("");

//     const fetchData = async () => {
//     const allData = await Promise.all(
//       nounFiles.map(async (file) => {
//         const res = await fetch(file);
//         const json: WordEntry[] = await res.json();
//         console.log("JSON from TypeScript!: " + json);
//         const filtered =
//           selectedCategory === "all"
//             ? json
//             : json.filter((w) => w.category === selectedCategory);
//         return filtered.sort(() => 0.5 - Math.random()).slice(0, 6);
//       })
//     );

// }
//   }
