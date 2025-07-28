// "use client";
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

import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const targetValue = "Common Noun";
  const fileNames = [
    "/data/nouns/nouns-animals.json",
    "/data/verbs/verbs-communication.json",
    "/data/prepositions/preprosition-condition.json",
    "/data/adverbs/adverbs-balance.json",
  ];
  const matchedData = [];

  const files = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(process.cwd(), "public", fileName);
      const fileContents = await fs.readFile(filePath, "utf8");
      console.log("file contents: " + fileContents);
      return JSON.parse(fileContents);
    })
  );

  files.forEach((data) => {
    // Replace with your matching logic
    if (data.includes(targetValue)) {
      console.log("data " + data);
      matchedData.push(data);
      console.log("matchedData " + matchedData);
    }
  });
  return (
    <div>
      {/* Render the matchedData here */}
      <pre>{JSON.stringify(matchedData, null, 2)}</pre>
    </div>
  );
}
