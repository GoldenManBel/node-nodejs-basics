import { fork } from 'node:child_process';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePathWorker = path.join(__dirname, 'files/script.js');

const args = ['argument one', 'argument two', 'argument three'];


const spawnChildProcess = async (args) => {
    fork(filePathWorker, args);
};

spawnChildProcess(args);