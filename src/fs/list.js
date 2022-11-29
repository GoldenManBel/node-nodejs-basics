import * as fs from 'node:fs';
import { readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFolder = path.join(__dirname, 'files');
const errorText = 'FS operation failed';

const list = async () => {
    try {
        const existsFolder = fs.existsSync(pathFolder);

        if(!existsFolder) {
            throw new Error(errorText);
        } else {
            const files = await readdir(pathFolder);
            console.info(files);
        }
    } catch (error) {
        console.error(error); 
    } 
};

await list();