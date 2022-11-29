import * as fs from 'node:fs';
import { rename as renameFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFile = path.join(__dirname, 'files/wrongFilename.txt');
const pathRenameFile= path.join(__dirname, 'files/properFilename.md');
const errorText = 'FS operation failed';

const rename = async () => {
    try {
        const existsFile = fs.existsSync(pathFile);
        const existsRenameFile = fs.existsSync(pathRenameFile);

        if(!existsFile || existsRenameFile) {
            throw new Error(errorText);
        } else {
            await renameFile(pathFile, pathRenameFile);
        }
    } catch (error) {
        console.error(error); 
    }   
};

await rename();