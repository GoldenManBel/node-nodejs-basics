import { createHash } from 'node:crypto';

const content  = './files/fileToCalculateHash.txt';

const calculateHash = async () => {
    const result = createHash('sha256').update(content).digest('hex');

    console.info(result);
};

await calculateHash();