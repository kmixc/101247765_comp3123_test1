// Oliver Kmiec 101247765
function lowerCaseWords(array) {
    result = [];
    return new Promise((resolve, reject) => {
        if (array.length == 0) {
            reject("Array cannot be empty")
        } else {
            for (char of array) {
                if (typeof (char) == "string") {
                    result.push(char.toLowerCase())
                }
            }
            resolve(result)
        }
    })
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.log(error))

lowerCaseWords([])
    .then(result => console.log(result))
    .catch(error => console.log(error))