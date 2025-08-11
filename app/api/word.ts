import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { WordEntry } from "../../public/types";

function loadAllJsonData(): WordEntry[] {
    const dataDir = path.join(process.cwd(), "data");
    const files: string[] = [];

    function readDirRecursive(dir: string) {
        fs.readdirSync(dir).forEach((file) => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                readDirRecursive(fullPath);
            } else if (file.endsWith(".json")) {
                files.push(fullPath);
            }
        });
    }

    readDirRecursive(dataDir);

    let allData: WordEntry[] = [];
    for (const file of files) {
        const content = JSON.parse(fs.readFileSync(file, "utf8")) as WordEntry[];
        allData = allData.concat(content);
    }
    return allData;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = loadAllJsonData();
    res.status(200).json({ words: data });
}
