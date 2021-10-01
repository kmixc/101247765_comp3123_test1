// Oliver Kmiec 101247765
let fs = require('fs')
let path = require('path')
let logDir = './logs'

function removeLogFiles() {
    //Output file names to delete
    fs.readdirSync(logDir).forEach(file => {
        console.log(path.join(file))
    })
    // remove logs
    fs.rmdirSync(logDir, { recursive: true }, (err) => {
        if (err) {
            throw err
        }
    });
    console.log(logDir + " is deleted")
}

removeLogFiles()