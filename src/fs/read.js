import { readFile, access, constants } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fileToRead.txt');
const errorText = 'FS operation failed';

const read = async () => {
    try {
        const fileExists = await access(filePath, constants.F_OK).then(() => true).catch(() => false);

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