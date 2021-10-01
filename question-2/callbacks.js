// Oliver Kmiec 101247765
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' }
        console.log(success)
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error" delayed exception!');
        } catch (e) {
            console.log(e)
        }
    }, 500)
}

const resolvedPromise = () => {
    let message = { message: 'delayed success!' }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, 500)
    })
}

const rejectPromise = () => {
    let message = { error: "delayed exception!" };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(message)
        }, 500)
    })
}

resolvedPromise()
    .then(message => console.log(message));
rejectPromise()
    .catch(error => console.log(error));