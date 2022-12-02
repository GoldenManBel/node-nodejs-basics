import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const stdIn = process.stdin;
const stdOut = process.stdout;

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, String(chunk).split('').reverse().join('').trim() + '\n');
    }
});

const transform = async () => {
    try {
        await pipeline(stdIn, transformStream, stdOut);
    } catch (error) {
        console.error(error);
    }
};

await transform();