import { rename as renameFile, access, constants } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/wrongFilename.txt');
const renameFilePath= path.join(__dirname, 'files/properFilename.md');
const errorText = 'FS operation failed';

const rename = async () => {
    try {
        const fileExists = await access(filePath, constants.F_OK).then(() => true).catch(() => false);
        const renameFileExists = await access(renameFilePath, constants.F_OK).then(() => true).catch(() => false);

        if(!fileExists || renameFileExists) {
            throw new Error(errorText);
        } else {
            await renameFile(filePath, renameFilePath);
        }
    } catch (error) {
        console.error(error); 
    }   
};

await rename();