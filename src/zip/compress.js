import * as fs from 'node:fs';
import { access, constants } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = './files/fileToCompress.txt';
const fileReadPath = path.join(__dirname, fileRead);

const fileWrite = './files/archive.gz';
const fileWritePath = path.join(__dirname, fileWrite);

const gzip = zlib.createGzip();

const errorText = 'Zip operation failed';

const compress = async () => {
    try {
        const fileExists = await access(fileReadPath, constants.F_OK).then(() => true).catch(() => false);

        if(fileExists) {
            const readStream = fs.createReadStream(fileReadPath);
            const writeStream = fs.createWriteStream(fileWritePath);

            await pipeline(readStream, gzip, writeStream);
        } else {
            throw new Error(errorText);
        }
    } catch (error) {
        console.error(error);
    }
};

await compress();