import * as fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = './files/archive.gz';
const fileReadPath = path.join(__dirname, fileRead);
const readStream = fs.createReadStream(fileReadPath);

const fileWrite = './files/fileToCompress.txt';
const fileWritePath = path.join(__dirname, fileWrite);
const writeStream = fs.createWriteStream(fileWritePath);

const gunzip = zlib.createGunzip();


const decompress = async () => {
    try {
        await pipeline(readStream, gunzip, writeStream);
    } catch (error) {
        console.error(error);
    }
};

await decompress();