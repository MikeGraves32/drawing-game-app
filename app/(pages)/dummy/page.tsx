import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const jsonDirectoryNouns = path.join(process.cwd(), "public/data/nouns"); // Assuming your JSON files are in a 'data' folder at the root
  const jsonDirectoryVerbs = path.join(process.cwd(), "public/data/verbs"); // Assuming your JSON files are in a 'data' folder at the root
  const jsonDirectoryPreposition = path.join(
    process.cwd(),
    "public/data/prepositions"
  ); // Assuming your JSON files are in a 'data' folder at the root
  const jsonDirectoryAdverbs = path.join(process.cwd(), "public/data/adverbs"); // Assuming your JSON files are in a 'data' folder at the root
  const targetNounValue = "Common Noun";
  const matchedNounData = [];

  interface NounEntry {
    id: string;
    category: string;
    grammarType: string;
    text: string;
  }

  try {
    const nounfilenames = await fs.readdir(jsonDirectoryNouns);
    const verbfilenames = await fs.readdir(jsonDirectoryVerbs);
    const prepositionfilenames = await fs.readdir(jsonDirectoryPreposition);
    const adverbfilenames = await fs.readdir(jsonDirectoryAdverbs);

    const filePromisesNoun = nounfilenames.map(async (filename) => {
      if (filename.endsWith(".json")) {
        // Ensure only JSON files are processed
        const filePath = path.join(jsonDirectoryNouns, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        return JSON.parse(fileContents);
      }
      return null; // Skip non-JSON files
    });

    const filePromisesVerb = verbfilenames.map(async (filename) => {
      if (filename.endsWith(".json")) {
        // Ensure only JSON files are processed
        const filePath = path.join(jsonDirectoryVerbs, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        return JSON.parse(fileContents);
      }
      return null; // Skip non-JSON files
    });

    const filePromisesPreposition = prepositionfilenames.map(
      async (filename) => {
        if (filename.endsWith(".json")) {
          // Ensure only JSON files are processed
          const filePath = path.join(jsonDirectoryPreposition, filename);
          const fileContents = await fs.readFile(filePath, "utf8");
          return JSON.parse(fileContents);
        }
        return null; // Skip non-JSON files
      }
    );

    const filePromisesAdverb = adverbfilenames.map(async (filename) => {
      if (filename.endsWith(".json")) {
        // Ensure only JSON files are processed
        const filePath = path.join(jsonDirectoryAdverbs, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        return JSON.parse(fileContents);
      }
      return null; // Skip non-JSON files
    });

    const allParsedNounData = await Promise.all(filePromisesNoun);
    const filteredNounData = allParsedNounData.filter((data) => data !== null); // Remove null entries from skipped files

    const allParsedVerbData = await Promise.all(filePromisesVerb);
    const filteredVerbData = allParsedVerbData.filter((data) => data !== null); // Remove null entries from skipped files

    const allParsedPrepositionData = await Promise.all(filePromisesPreposition);
    const filteredPrepositionData = allParsedPrepositionData.filter(
      (data) => data !== null
    ); // Remove null entries from skipped files

    const allParsedAdverbData = await Promise.all(filePromisesAdverb);
    const filteredAdverbData = allParsedAdverbData.filter(
      (data) => data !== null
    ); // Remove null entries from skipped files

    /*     filteredNounData.forEach((data) => {
      // Replace with your matching logic

      //   console.log("data " + data);

      if (data.includes(targetNounValue)) {
        console.log("data " + data.category);
        matchedNounData.push(data);
        console.log("matchedNounData " + matchedNounData);
      }
    });
 */
    return (
      <div>
        <h1>Data from Multiple JSON Files:</h1>
        <div>
          <h2>Nouns</h2>
          {filteredNounData.map((data, index) => (
            <div key={index}>
              <h2>File {index + 1}</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
        <div>
          <h2>Verbs</h2>
          {filteredVerbData.map((data, index) => (
            <div key={index}>
              <h2>File {index + 1}</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
        <div>
          <h2>Prepositions</h2>
          {filteredPrepositionData.map((data, index) => (
            <div key={index}>
              <h2>File {index + 1}</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
        <div>
          <h2>Adverbs</h2>
          {filteredAdverbData.map((data, index) => (
            <div key={index}>
              <h2>File {index + 1}</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching or parsing JSON files:", error);
    return <div>Error loading data.</div>;
  }
}
