import * as fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFile = path.join(__dirname, 'files/fresh.txt');
const errorText = 'FS operation failed';
const fileText = 'I am fresh and young';

const create = async () => {
    try {
        const existsFile = fs.existsSync(pathFile);

        if(existsFile) {
            throw new Error(errorText);
        } else {
            await writeFile(pathFile, fileText);
        }
    } catch (error) {
        console.error(error); 
    }  
};

await create();