import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const { argWorker, index } = workerData;
    if(argWorker) {
        const result = nthFibonacci(argWorker);
        parentPort.postMessage({ result, index });
    } else {
        throw new Error('worker is error!');
    }  
};

sendResult();