const parseArgs = () => {
    const arg = process.argv.slice(2);

    const result = arg.map((el, index) => {
        return index === arg.length - 1 ? el :
               index % 2 === 0 ? `${el} is ` :
                                   `${el}, ` ;
    });

    console.info(result.join(''));
};

parseArgs();