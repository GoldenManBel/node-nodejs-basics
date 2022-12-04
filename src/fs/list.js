import * as fs from 'node:fs';
import { readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = path.join(__dirname, 'files');
const errorText = 'FS operation failed';

const list = async () => {
    try {
        const folderExists = fs.existsSync(folderPath);

        if(!folderExists) {
            throw new Error(errorText);
        } else {
            const files = await readdir(folderPath);
            console.info(files);
        }
    } catch (error) {
        console.error(error); 
    } 
};

await list();