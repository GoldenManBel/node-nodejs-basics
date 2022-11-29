import * as fs from 'node:fs';
import { rename as renameFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files/wrongFilename.txt');
const renameFilePath= path.join(__dirname, 'files/properFilename.md');
const errorText = 'FS operation failed';

const rename = async () => {
    try {
        const fileExists = fs.existsSync(filePath);
        const renameFileExists = fs.existsSync(renameFilePath);

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