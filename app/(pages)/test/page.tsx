"use client";
/* import { useEffect, useState } from "react";

export default function MyPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const urls = [
        "/data/nouns/nouns-animals.json",
        "/data/verbs/verbs-communication.json",
        "/data/prepositions/preprosition-condition.json",
        "/data/adverbs/adverbs-balance.json",
      ]; // Replace with your file paths
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const jsonResponses = await Promise.all(
        responses.map((res) => res.json())
      );
      setData(jsonResponses);
    }
    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
} */

//

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { WordEntry } from "../../../public/types";
import { GrammarType } from "../../../public/types";

export default function Home() {
  const [words, setWords] = useState<WordEntry[]>([]);
  const [randomWords, setRandomWords] = useState<Record<string, string>>({});

  const grammarTypes = ["noun", "verb", "preposition", "adverb"];

  useEffect(() => {
    fetch("../../api/words")
      .then((res) => res.json())
      .then((data) => setWords(data.words));
  }, []);

  function pickRandomWords() {
    const picked: Record<string, string> = {};
    grammarTypes.forEach((type) => {
      const filtered = words.filter((w) => w.grammarType === type);
      console.log("filtered length " + filtered.length + " - " + filtered);
      if (filtered.length > 0) {
        const random = filtered[Math.floor(Math.random() * filtered.length)];
        picked[type] = random.text;
      }
    });
    setRandomWords(picked);
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <button
        onClick={pickRandomWords}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pick Random Words
      </button>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(randomWords).map(([type, text]) => (
          <Card
            key={type}
            title={`${type.toUpperCase()}: ${text}`}
            description={undefined}
          />
        ))}
      </div>
    </div>
  );
}
