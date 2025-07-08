import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function getAllJsonData(directoryPath) {
    const fullPath = path.join(process.cwd(), directoryPath);
    const files = await readdir(fullPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const allData = [];
    for (const file of jsonFiles) {
        const filePath = path.join(fullPath, file);
        const fileContent = await readFile(filePath, 'utf8');
        try {
            const jsonData = JSON.parse(fileContent);
            allData.push(jsonData);
        } catch (error) {
            console.error(`Error parsing JSON from ${file}:`, error);
        }
    }
    return allData;
}