import * as fs from 'node:fs';
import { rm } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fileToRemove.txt');
const errorText = 'FS operation failed';

const remove = async () => {
    try {
        const fileExists = fs.existsSync(filePath);

        if(!fileExists) {
            throw new Error(errorText);
        } else {
            await rm(filePath);
        }
    } catch (error) {
        console.error(error); 
    }  
};

await remove();