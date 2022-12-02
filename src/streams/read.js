import * as fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = './files/fileToRead.txt';
const fileReadPath = path.join(__dirname, fileRead);

const readStream = fs.createReadStream(fileReadPath);
const stdOut = process.stdout;

const read = async () => {
    try {
        await pipeline(readStream, stdOut);
    } catch (error) {
        console.error(error);
    }
};

await read();