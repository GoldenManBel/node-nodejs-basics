import * as fs from 'node:fs';
import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fileToRead.txt');
const errorText = 'FS operation failed';

const read = async () => {
    try {
        const fileExists = fs.existsSync(filePath);

        if(!fileExists) {
            throw new Error(errorText);
        } else {
            const fileContent = await readFile(filePath, { encoding: 'utf8' });
            console.info(fileContent);
        }
    } catch (error) {
        console.error(error); 
    }  
};

await read();