import * as fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = './files/fileToCompress.txt';
const fileReadPath = path.join(__dirname, fileRead);
const readStream = fs.createReadStream(fileReadPath);

const fileWrite = './files/archive.gz';
const fileWritePath = path.join(__dirname, fileWrite);
const writeStream = fs.createWriteStream(fileWritePath);

const gzip = zlib.createGzip();

const compress = async () => {
    try {
        await pipeline(readStream, gzip, writeStream);
    } catch (error) {
        console.error(error);
    }
};

await compress();