import { promises as fs } from "fs";
import path from "path";
import { DataItem } from "../public/types"; // Adjust path as needed

const nounsAnimals = "references/nouns/nouns-animals.json";
const nounsBuilding = "references/nouns/nouns-buildings.json";
const verbsCommunication = "references/verbs/verbs-communication.json";
const verbsCookingFood = "references/verbs/verbs-cooking-food.json";
// import Card from "./components/Card";

async function getData(filename: string): Promise<DataItem[]> {
  const filePath = path.join(process.cwd(), "public", filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Page() {
  const dataNounsAnimals = await getData(nounsAnimals);
  const dataNounsBuilding = await getData(nounsBuilding);
  const dataVerbsCommunication = await getData(verbsCommunication);
  const dataVerbsCookingFood = await getData(verbsCookingFood);

  return (
    <div>
      <h1>Noun</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <ul>
          {" "}
          {dataNounsAnimals.map((item) => (
            <li key={item.id}>
              {item.grammarType} | {item.category} | {item.text}
            </li>
          ))}{" "}
          {dataNounsBuilding.map((item) => (
            <li key={item.id}>
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
