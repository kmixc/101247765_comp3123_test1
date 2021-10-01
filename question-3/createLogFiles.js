// Oliver Kmiec 101247765
let fs = require('fs')
let path = require('path')
let logDir = './logs'

function createLogFiles() {
    // creates log directory if doesnt exist
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    };
    // create 10 log files
    for (let i = 0; i < 10; i++) {
        let file = `/log${i}.txt`;
        fs.writeFile(path.join(logDir, file), 'Log Created', function (err) {
            if (err) throw err;
        })
        console.log(file)
    }
    console.log("All Log Files Created")
}

createLogFiles()