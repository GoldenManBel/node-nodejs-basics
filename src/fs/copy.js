import * as fs from 'node:fs';
import { cp } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files_copy');
const errorText = 'FS operation failed';

const copy = async () => {
    try {
        const folderExists = fs.existsSync(folderPath);
        const newFolderExists = fs.existsSync(newFolderPath);

        if(!folderExists || newFolderExists) {
            throw new Error(errorText);
        } else {
            await cp(folderPath, newFolderPath, {
                recursive: true
            });
        }
    } catch (error) {
        console.error(error); 
    }  
};

copy();