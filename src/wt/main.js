import { Worker } from 'node:worker_threads';
import os from 'os';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePathWorker = path.join(__dirname, './worker.js');

const performCalculations = async () => {
    try {
        let numBase = 10;
        const numOfCpus = os.cpus().length;
        const result = [];

        for (let index = 0; index < numOfCpus; index++) {  
            let argWorker = numBase;

            if(numBase === 11 || numBase === 15) {
                argWorker = 0;
            } 
            
            const worker = new Worker(filePathWorker, {
                workerData: {
                    argWorker,
                    index
                }
            });
    
            worker.on('message', (data) => {
                result.push({
                    status: 'resolved',
                    data: data.result,
                    index
                });
            });
            worker.on('error', (error) => {
                result.push({
                    status: 'error',
                    data: null,
                    index
                });
            });
            worker.on('exit', (code) => {       
                if(result.length === numOfCpus) {
                    result.sort((a, b) => {
                        if (a.index > b.index) {
                            return 1;
                        }
                        if (a.index < b.index) {
                            return -1;
                        }
                        return 0;
                    });  

                    const resultOutput = result.map(el => {
                        const { status, data } = el;
                        return { status, data };
                    });

                    console.info(resultOutput);
                }                
            });

            numBase++;  
        };
    } catch (error) {
        console.error(error);
    }
};

await performCalculations();