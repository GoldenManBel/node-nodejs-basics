import { rm, access, constants } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/fileToRemove.txt');
const errorText = 'FS operation failed';

const remove = async () => {
    try {
        const fileExists = await access(filePath, constants.F_OK).then(() => true).catch(() => false);

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