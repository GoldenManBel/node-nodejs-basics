import * as fs from 'node:fs';
import { cp } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFolder = path.join(__dirname, 'files');
const pathNewFolder = path.join(__dirname, 'files_copy');
const errorText = 'FS operation failed';

const copy = async () => {
    try {
        const existsFolder = fs.existsSync(pathFolder);
        const existsNewFolder = fs.existsSync(pathNewFolder);

        if(!existsFolder || existsNewFolder) {
            throw new Error(errorText);
        } else {
            await cp(pathFolder, pathNewFolder, {
                recursive: true
            });
        }
    } catch (error) {
        console.error(error); 
    }  
};

copy();