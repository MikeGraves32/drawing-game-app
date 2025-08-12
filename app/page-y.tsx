import { promises as fs } from "fs";
import path from "path";
import { DataItem } from "../public/types"; // Adjust path as needed

const nounFiles = [
  "/data/nouns/nouns-animals.json",
  "/data/nouns/nouns-buildings.json",
  "/data/nouns/nouns-clothing.json",
  "/data/nouns/nouns-food-drink.json",
  "/data/nouns/nouns-household-items.json",
];

const nounsAnimals = "data/nouns/nouns-animals.json";
const nounsBuilding = "data/nouns/nouns-buildings.json";
const verbsCommunication = "data/verbs-communication.json";
const verbsCookingFood = "data/verbs-cooking-food.json";
// import Card from "./components/Card";

async function getData(filename: string): Promise<DataItem[]> {
  const filePath = path.join(process.cwd(), "public", filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

// async function getFile(files: fileFolder): Promise<DataItem[]> {
//   const folderPath = path.join(process.cwd(), 'public',files );
// }

export default async function Page() {
  // const dataNouns = await getData(nounFiles);
  const dataNounsAnimals = await getData(nounsAnimals);
  const dataNounsBuilding = await getData(nounsBuilding);
  const dataVerbsCommunication = await getData(verbsCommunication);
  const dataVerbsCookingFood = await getData(verbsCookingFood);

  return (
    <div>
      <h1>Nouns</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <ul>
          {dataNounsAnimals.map((item, id) => (
            <li key={item.text}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
        <ul>
          {dataNounsBuilding.map((item) => (
            <li key={item.text}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}
        </ul>
      </div>
      <h1>Verb</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <ul>
          {" "}
          <div>
            {dataVerbsCommunication.map((item) => (
              <li key={item.id}>
                {item.grammarType} | {item.category} | {item.text}
              </li>
            ))}{" "}
          </div>
          <div>
            {dataVerbsCookingFood.map((item) => (
              <li key={item.id}>
                {item.grammarType} | {item.category} | {item.text}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
