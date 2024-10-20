export const Console = {
    Writeln : (...args) => {
        output = args.join(' ') + '\n';
        process.stdout.write(output);
    }

}

