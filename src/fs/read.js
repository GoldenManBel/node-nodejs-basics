import * as fs from 'node:fs';
import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFile = path.join(__dirname, 'files/fileToRead.txt');
const errorText = 'FS operation failed';

const read = async () => {
    try {
        const existsFile = fs.existsSync(pathFile);

        if(!existsFile) {
            throw new Error(errorText);
        } else {
            const fileContent = await readFile(pathFile, { encoding: 'utf8' });
            console.info(fileContent);
        }
    } catch (error) {
        console.error(error); 
    }  
};

await read();