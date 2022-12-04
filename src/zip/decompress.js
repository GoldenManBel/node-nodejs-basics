import * as fs from 'node:fs';
import { access, constants } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = './files/archive.gz';
const fileReadPath = path.join(__dirname, fileRead);

const fileWrite = './files/fileToCompress.txt';
const fileWritePath = path.join(__dirname, fileWrite);

const gunzip = zlib.createGunzip();

const errorText = 'Zip operation failed';

const decompress = async () => {
    try {
        const fileExists = await access(fileReadPath, constants.F_OK).then(() => true).catch(() => false);

        if(fileExists) {
            const readStream = fs.createReadStream(fileReadPath);
            const writeStream = fs.createWriteStream(fileWritePath);

            await pipeline(readStream, gunzip, writeStream);
        } else {
            throw new Error(errorText);
        }
    } catch (error) {
        console.error(error);
    }
};

await decompress();