import { writeFile, access, constants } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fresh.txt');
const fileText = 'I am fresh and young';
const errorText = 'FS operation failed';

const create = async () => {
    try {
        const fileExists = await access(filePath, constants.F_OK).then(() => true).catch(() => false);

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