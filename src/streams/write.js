import * as fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWrite = './files/fileToWrite.txt';
const fileWritePath = path.join(__dirname, fileWrite);

const writeStream = fs.createWriteStream(fileWritePath);
const stdIn = process.stdin;

const write = async () => {
    try {
        await pipeline(stdIn, writeStream);
    } catch (error) {
        console.error(error);
    }
};

await write();