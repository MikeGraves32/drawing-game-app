import { promises as fs } from "fs";
import path from "path";
import { DataItem } from "../public/types"; // Adjust path as needed

async function getData(filename: string): Promise<DataItem[]> {
  const filePath = path.join(process.cwd(), "public", filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Page() {
  const data1 = await getData("references/nouns/nouns-animals.json");
  const data2 = await getData("references/verbs/verbs-communication.json");

  return (
    <div>
      <h1>Data from File 1</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <ul>
          {data1.map((item) => (
            <li key={item.id}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
      </div>
      <h1>Data from File 2</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <ul>
          {data2.map((item) => (
            <li key={item.id}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
