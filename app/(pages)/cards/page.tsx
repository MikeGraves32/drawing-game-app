"use-client";

import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const jsonDirectory = path.join(process.cwd(), "./public/data/nouns"); // Assuming your JSON files are in a 'data' folder at the root

  try {
    const filenames = await fs.readdir(jsonDirectory);

    const filePromises = filenames.map(async (filename) => {
      if (filename.endsWith(".json")) {
        // Ensure only JSON files are processed
        const filePath = path.join(jsonDirectory, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        console.log("filecontents " + JSON.parse(fileContents));
        return JSON.parse(fileContents);
      }
      return null; // Skip non-JSON files
    });

    const allParsedData = await Promise.all(filePromises);
    const filteredData = allParsedData.filter((data) => data !== null); // Remove null entries from skipped files

    return (
      <div>
        <h1>Data from Multiple JSON Files:</h1>
        {filteredData.map((data, index) => (
          <div key={index}>
            <h2>File {index + 1}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ))}
        {/* <ul>
          {filteredData.map((data, index) => (
            <li key={data.text}>
              {data.grammarType} | {data.category} | {data.text}
            </li>
          ))}
        </ul> */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching or parsing JSON files:", error);
    return <div>Error loading data.</div>;
  }
}
