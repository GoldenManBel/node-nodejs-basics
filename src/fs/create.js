import * as fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFile = path.join(__dirname, 'files/fresh.txt');

const create = async () => {
    try {
        const existsFile = fs.existsSync(pathFile);

        if(existsFile) {
            throw new Error('FS operation failed');
        } else {
            await writeFile(pathFile, ' I am fresh and young');
        }
    } catch (error) {
        console.error(error); 
    }  
};

await create();