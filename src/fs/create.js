import * as fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fresh.txt');
const fileText = 'I am fresh and young';
const errorText = 'FS operation failed';

const create = async () => {
    try {
        const fileExists = fs.existsSync(filePath);

        if(fileExists) {
            throw new Error(errorText);
        } else {
            await writeFile(filePath, fileText);
        }
    } catch (error) {
        console.error(error); 
    }  
};

await create();