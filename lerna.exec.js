const { exec } = require('child_process');
const operation = process.argv[2];
const packageName = process.argv[3];



exec(`yarn lerna run --scope @project/${packageName} ${operation}`, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});