const parseEnv = () => {
    const processEnvObj = process.env;
    const correctPrefix = 'RSS_';

    const entriesProcessEnv = Object.entries(processEnvObj);

    const arrCorrectVariables = entriesProcessEnv.filter(el => el[0].startsWith(correctPrefix, 0));
    
    const arrResults = arrCorrectVariables.map(el => `${el[0]}=${el[1]}`);

    console.info(arrResults.join('; '));
};

parseEnv();